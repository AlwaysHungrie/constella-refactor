import { config } from '../config'
import axios from 'axios'

const { privy } = config
const { appId, appSecret } = privy

export const getPrivyUser = async (privyUserId: string) => {
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