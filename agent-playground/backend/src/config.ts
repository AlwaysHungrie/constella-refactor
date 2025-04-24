import dotenv from 'dotenv'
import { PrismaClient } from './generated/prisma/client'

dotenv.config()
const prisma = new PrismaClient()

const PORT = process.env.PORT || 3003
const JWT_SECRET = process.env.JWT_SECRET || 'playground-jwt-secret'

const PRIVY_APP_ID = process.env.PRIVY_APP_ID
const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET
const PRIVY_PUBLIC_KEY = process.env.PRIVY_PUBLIC_KEY

if (!PRIVY_APP_ID || !PRIVY_APP_SECRET || !PRIVY_PUBLIC_KEY) {
  throw new Error('privy env variables are not set')
}

const RUST_BINARY_PATH = process.env.RUST_BINARY_PATH
if (!RUST_BINARY_PATH) {
  throw new Error('rust binary path is not set')
}

export const config = {
  port: PORT,
  jwtSecret: JWT_SECRET,
  prisma,
  privy: {
    appId: PRIVY_APP_ID,
    appSecret: PRIVY_APP_SECRET,
    publicKey: PRIVY_PUBLIC_KEY,
  },
  rustBinaryPath: RUST_BINARY_PATH,
}
