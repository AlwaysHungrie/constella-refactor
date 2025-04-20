'use client'

import { usePrivy } from '@privy-io/react-auth'
import CTAButton from '../ctaButton'
import { useCallback, useEffect } from 'react'
import { postRequest } from '@/utils/api'
import useUserStore from '@/stores/userStore'
export default function ConnectWallet() {
  const { authenticated, user, login, getAccessToken } = usePrivy()
  const { setToken, token, address } = useUserStore()

  const handleConnect = useCallback(
    async (address: string) => {
      console.log('getting jwt', address)
      const accessToken = await getAccessToken()
      try {
        const response = await postRequest('auth/connect', {
          address,
          privyAccessToken: accessToken,
        })

        if (!response.token) {
          throw new Error('Server did not return a token')
        }

        setToken(response.token, address)
      } catch (error) {
        console.error(error)
      }
    },
    [getAccessToken, setToken]
  )

  useEffect(() => {
    console.log('useEffect')
    if (!authenticated) return
    console.log('authenticated', user)
    if (!user || !user.wallet || !user.wallet.address) return
    console.log('address', user.wallet.address)
    
    console.log('token, address', token, address)
    if (token && address && user.wallet.address === address) return
    

    handleConnect(user.wallet.address)
  }, [authenticated, user, token, address, handleConnect])

  if (authenticated) return <></>
  if (user?.wallet?.address) return <></>

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#e2ebe215] mt-4 mb-2 px-6 py-4 rounded-sm">
      <CTAButton inverted className="px-12" onClick={login}>
        Connect Wallet
      </CTAButton>
    </div>
  )
}
