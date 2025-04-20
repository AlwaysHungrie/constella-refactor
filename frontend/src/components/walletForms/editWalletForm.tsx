'use client'

import { TextInput } from '../textInput'
import CTAButton from '../ctaButton'
import useUserStore from '@/stores/userStore'
import { authorizedDeleteRequest } from '@/utils/api'
import { useWalletStore, Wallet } from '@/stores/walletStore'
import { useState } from 'react'
import { Checkbox } from '../checkbox'
export const EditWalletForm = ({ wallet }: { wallet: Wallet }) => {
  const { token } = useUserStore()
  const { deleteWallet } = useWalletStore()

  const [allowDelete, setAllowDelete] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  // const handleCreateWallet = async () => {
  //   if (!token) return
  //   setIsLoading(true)
  //   try {
  //     const response = await authorizedPostRequest(token, 'wallet', {
  //       domain,
  //       systemPrompt,
  //     })
  //     console.log(response)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const handleDeleteWallet = async () => {
    if (!token) return
    try {
      setIsDeleting(true)
      await authorizedDeleteRequest(token, `wallet/${wallet.walletAddress}`)
      deleteWallet(wallet.walletAddress)
    } catch (error) {
      console.error(error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(wallet.walletAddress)
    alert('Address copied to clipboard')
  }

  return (
    <>
      <TextInput
        value={wallet.domain}
        placeholder="Domain (https://...)"
        readOnly
      />

      <div className="flex items-start gap-2 text-sm text-textgreen">
        <Checkbox
          checked={allowDelete}
          onChange={() => setAllowDelete(!allowDelete)}
        />
        Allow Delete
      </div>

      <div className="flex gap-2">
        <CTAButton className="text-sm" onClick={handleCopyAddress}>
          Copy Address
        </CTAButton>
        <CTAButton
          className="text-sm"
          onClick={handleDeleteWallet}
          disabled={isDeleting || !allowDelete}
        >
          {isDeleting ? 'Deleting...' : 'Delete Wallet'}
        </CTAButton>
      </div>
    </>
  )
}
