'use client'

import { useState } from 'react'
import { TextInput } from '../textInput'
import CTAButton from '../ctaButton'
import useUserStore from '@/stores/userStore'
import { authorizedPostRequest } from '@/utils/api'
import { useWalletStore } from '@/stores/walletStore'

const isValidDomain = (domain: string) => {
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  return urlRegex.test(domain)
}

export const CreateWalletForm = () => {
  const { token } = useUserStore()
  const { addWallet } = useWalletStore()

  const [domain, setDomain] = useState('')
  const [systemPrompt, setSystemPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const allowCreateWallet = isValidDomain(domain) && systemPrompt

  const handleCreateWallet = async () => {
    if (!token) return
    setIsLoading(true)
    try {
      const response = await authorizedPostRequest(token, 'wallet', {
        domain,
        systemPrompt,
      })
      addWallet(response)
      setDomain('')
      setSystemPrompt('')
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <TextInput
        value={domain}
        onChange={setDomain}
        placeholder="Domain (https://...)"
      />
      <TextInput
        value={systemPrompt}
        onChange={setSystemPrompt}
        placeholder="System Prompt (You are a helpful assistant...)"
        isTextArea
      />
      <CTAButton
        className="text-sm"
        onClick={handleCreateWallet}
        disabled={!allowCreateWallet}
      >
        {isLoading ? 'Creating...' : 'Create Wallet'}
      </CTAButton>
    </>
  )
}
