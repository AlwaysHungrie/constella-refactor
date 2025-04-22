import { Request, Response } from 'express'
import { config } from '../config'
import Joi from 'joi'
import { AuthenticatedRequest } from '../middleware/jwt'
import { generateWalletCredentials } from '../services/wallet'
import { deleteRdsDb, setupRdsDb } from '../services/rds'
const { prisma, rds } = config

export const handleGetAgentWallets = async (_req: Request, res: Response) => {
  const req = _req as AuthenticatedRequest
  const { userId } = req

  const wallets = await prisma.agentWallet.findMany({
    where: {
      owner: {
        userId: userId,
      },
    },
  })

  return res.status(200).json(wallets)
}

export const handleGetAgentWallet = async (_req: Request, res: Response) => {
  const req = _req as AuthenticatedRequest
  const { walletAddress } = req.params

  const wallet = await prisma.agentWallet.findUnique({
    where: {
      walletAddress: walletAddress,
    },
    select: {
      walletAddress: true,
      domain: true,
      systemPrompt: true,
      ownerAddress: true,
    },
  })

  return res.status(200).json(wallet)
}

export const createAgentWalletSchema = Joi.object({
  domain: Joi.string().required(),
  systemPrompt: Joi.string().required(),
})

export const handleCreateAgentWallet = async (_req: Request, res: Response) => {
  const req = _req as AuthenticatedRequest
  const { userId } = req
  const { domain, systemPrompt } = req.body

  const user = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
  })

  if (!user) throw new Error('User not found')

  const { address: walletAddress, privateKey } =
    await generateWalletCredentials(domain, systemPrompt)

  const checkWallet = await prisma.agentWallet.findUnique({
    where: {
      walletAddress: walletAddress,
    },
  })
  if (checkWallet) throw new Error('Wallet already exists')

  const { dbName, dbUser, dbPassword } = await setupRdsDb(
    walletAddress,
    privateKey
  )

  const newWallet = await prisma.agentWallet.create({
    data: {
      owner: {
        connect: {
          userId: userId,
        },
      },

      walletAddress,
      privateKey,

      dbName,
      dbUser,
      dbHost: rds.endpoint,
      dbPort: parseInt(rds.port),

      dbPassword,
      domain,
      systemPrompt,
    },
  })

  return res.status(200).json(newWallet)
}

export const handleDeleteAgentWallet = async (_req: Request, res: Response) => {
  const req = _req as AuthenticatedRequest
  const { userId } = req
  const { walletAddress } = req.params

  const wallet = await prisma.agentWallet.findUnique({
    where: {
      walletAddress: walletAddress,
      owner: {
        userId: userId,
      },
    },
  })

  if (!wallet) throw new Error('Wallet not found')

  await deleteRdsDb(walletAddress, wallet.privateKey)

  await prisma.agentWallet.delete({
    where: {
      walletAddress: walletAddress,
    },
  })

  return res.status(200).json({ message: 'Wallet deleted' })
}
