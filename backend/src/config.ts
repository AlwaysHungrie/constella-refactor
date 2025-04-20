import dotenv from 'dotenv'
import { PrismaClient } from './generated/prisma/client'

dotenv.config()
const prisma = new PrismaClient()

const PORT = process.env.PORT || 3001
const JWT_SECRET = process.env.JWT_SECRET || ''

const PRIVY_APP_ID = process.env.PRIVY_APP_ID
const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET
const PRIVY_PUBLIC_KEY = process.env.PRIVY_PUBLIC_KEY

if (!PRIVY_APP_ID || !PRIVY_APP_SECRET || !PRIVY_PUBLIC_KEY) {
  throw new Error('privy env variables are not set')
}

const RDS_ENDPOINT = process.env.RDS_ENDPOINT
const RDS_PORT = process.env.RDS_PORT
const RDS_USERNAME = process.env.RDS_USERNAME
const RDS_PASSWORD = process.env.RDS_PASSWORD
const RDS_CA = process.env.RDS_CA

if (!RDS_ENDPOINT || !RDS_PORT || !RDS_USERNAME || !RDS_PASSWORD || !RDS_CA) {
  throw new Error('rds env variables are not set')
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
  rds: {
    endpoint: RDS_ENDPOINT,
    port: RDS_PORT,
    user: RDS_USERNAME,
    password: RDS_PASSWORD,
    ca: RDS_CA,
  },
}
