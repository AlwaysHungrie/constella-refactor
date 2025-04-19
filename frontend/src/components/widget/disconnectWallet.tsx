'use client'

import { usePrivy } from '@privy-io/react-auth'
import { formatAddress } from '../../utils/format'
export default function DisconnectWallet() {
  const { logout, user, authenticated } = usePrivy()

  if (!authenticated || !user?.wallet?.address) return <></>

  return (
    <div
      className="text-textgreen cursor-pointer mt-2 ml-auto hover:underline"
      onClick={() => logout()}
    >
      Disconnect ({formatAddress(user.wallet.address)})
    </div>
  )
}