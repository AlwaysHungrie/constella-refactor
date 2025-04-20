import { Request, Response } from 'express'
import { config } from '../config'
import Joi from 'joi'
import { generateJwtToken } from '../middleware/jwt'
import { getPrivyUser } from '../services/privy'
const { prisma } = config

export const connectSchema = Joi.object({
  address: Joi.string().required(),
  privyAccessToken: Joi.string().required(),
})

export const handleConnect = async (req: Request, res: Response) => {
  const { address, privyAccessToken } = req.body

  const privyUser = await getPrivyUser(privyAccessToken)
  const account = privyUser.linked_accounts.find(
    (account: any) => account.address === address
  )

  if (!account) {
    throw new Error('Address not found on Privy user')
  }

  let user = await prisma.user.findUnique({
    where: { userAddress: address },
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        userAddress: address,
        privyUserId: privyUser.id,
      },
    })
  }

  const token = generateJwtToken(user)
  res.status(200).json({ token })
}
