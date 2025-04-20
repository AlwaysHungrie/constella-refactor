import { config } from '../config'
import axios from 'axios'
import jwt from 'jsonwebtoken'
const { privy } = config
const { appId, appSecret, publicKey } = privy

export const getPrivyUser = async (privyAccessToken: string) => {
  const verified = jwt.verify(privyAccessToken, publicKey, {
    algorithms: ['ES256'],
  })

  if (!verified) {
    throw new Error('Failed to verify privy access token')
  }

  const decoded = jwt.decode(privyAccessToken)
  const privyUserId = decoded?.sub

  if (!privyUserId) {
    throw new Error('Invalid privy access token')
  }

  const basicAuth = Buffer.from(`${appId}:${appSecret}`).toString('base64')
  const response = await axios.get(
    `https://auth.privy.io/api/v1/users/${privyUserId}`,
    {
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'privy-app-id': appId,
      },
    }
  )

  const privyUser = response.data
  return privyUser
}