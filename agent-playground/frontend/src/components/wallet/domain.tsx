'use client'

import { usePrivy } from '@privy-io/react-auth'
import useUserStore from '@/stores/userStore'
import { API_URL } from '@/utils/api'
import { HiOutlineClipboardDocument } from 'react-icons/hi2'
export default function Domain() {
  const { authenticated, user, logout } = usePrivy()
  const { address, clearToken } = useUserStore()

  const domain = `${API_URL}/personal/${address}`

  const handleLogout = async () => {
    await logout()
    clearToken()
  }

  if (
    !authenticated ||
    !user?.wallet?.address
  ) {
    return null
  }

  return (
    <div className="flex flex-col gap-1 text-left mt-4">
      <button
        onClick={handleLogout}
        className="bg-black text-white px-2 py-1 rounded-md hover:opacity-80 transition-colors cursor-pointer font-medium"
      >
        Logout
      </button>
      <div className="flex flex-col gap-1 text-left">
        <p className="text-xs">
          This is your domain, use this while creating a wallet on{' '}
          <a
            href="https://constella.one"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Constella
          </a>
        </p>
        <div className="flex items-center gap-1">
          <input
            type="text"
            value={domain}
            readOnly
            className="flex-1 text-xs bg-white p-1 rounded-[3px] border border-gray-300"
          />
          <HiOutlineClipboardDocument
            className="w-4 h-4 cursor-pointer hover:text-gray-500"
            onClick={() => {
              navigator.clipboard.writeText(domain)
            }}
          />
        </div>
      </div>
    </div>
  )
}
