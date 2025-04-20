import crypto from 'crypto'
import { ethers, isHexString } from 'ethers'
import { config } from '../config'

const { jwtSecret } = config

const generateWalletHash = async (
  domain: string,
  systemPrompt: string
) => {
  const hash = crypto.createHash('sha256')
  hash.update(jwtSecret)
  hash.update(domain)
  hash.update(systemPrompt)
  return hash.digest('hex')
}

export const generateWalletCredentials = async (domain: string, systemPrompt: string) => {
  const hash = await generateWalletHash(domain, systemPrompt)
  let privateKey = crypto.createHash('sha256').update(hash).digest('hex')
  
  if (!privateKey.startsWith('0x')) {
    privateKey = `0x${privateKey}`
  }

  if (privateKey.length > 66) {
    privateKey = privateKey.slice(0, 66)
  }

  if (privateKey.length < 66) {
    privateKey = privateKey.padEnd(66, '0')
  }

  if (!isHexString(privateKey)) {
    throw new Error('Unable to generate private key')
  }

  const wallet = new ethers.Wallet(privateKey)
  return {
    privateKey: wallet.privateKey,
    address: wallet.address,
  }
}