import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_WALLET_HOST

export const postRequest = async (path: string, body: object) => {
  const response = await axios.post(`${API_URL}/api/${path}`, body)
  return response.data
}

export const authorizedPostRequest = async (
  token: string,
  path: string,
  body: object
) => {
  const response = await axios.post(`${API_URL}/api/${path}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
