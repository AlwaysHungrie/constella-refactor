import axios from 'axios'

export const API_URL = process.env.NEXT_PUBLIC_API_HOST
export const CONSTELLA_FRONTEND_URL = process.env.NEXT_PUBLIC_CONSTELLA_FRONTEND_URL || 'https://constella.one'
export const CONSTELLA_BACKEND_URL = process.env.NEXT_PUBLIC_CONSTELLA_BACKEND_URL || 'https://api.constella.one'

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

export const authorizedGetRequest = async (token: string, path: string) => {
  const response = await axios.get(`${API_URL}/api/${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const authorizedDeleteRequest = async (token: string, path: string) => {
  const response = await axios.delete(`${API_URL}/api/${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
