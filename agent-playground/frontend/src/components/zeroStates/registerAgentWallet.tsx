'use client'
import useUserStore from '@/stores/userStore'
import { useAgentWalletStore } from '@/stores/agentWalletStore'
import { useCallback, useState } from 'react'
import { API_URL, CONSTELLA_BACKEND_URL } from '@/utils/api'
import CodeHighlight from '../codeHighlight'
import { usePrivy } from '@privy-io/react-auth'
import CTAButton from '../ctaButtont'
import axios from 'axios'

export default function RegisterAgentWallet() {
  const { authenticated, user } = usePrivy()
  const {
    address,
    agentWalletAddress: lastUsedAgentWalletAddress,
    setAgentWalletAddress: setLastUsedAgentWalletAddress,
  } = useUserStore()

  const { address: agentWalletAddress, setAgentWallet } = useAgentWalletStore()

  const [isLoading, setIsLoading] = useState(false)
  const [walletAddressInput, setWalletAddressInput] = useState(
    lastUsedAgentWalletAddress || ''
  )
  const [error, setError] = useState<string | null>(null)

  const domain = `${API_URL}/personal/${address}`
  const allowCreateWallet = !isLoading && walletAddressInput

  const handleRegisterAgentWallet = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        `${CONSTELLA_BACKEND_URL}/api/wallet/${walletAddressInput}`
      )
      if (!response || !response.data) {
        throw new Error('Wallet not found')
      }
      const { domain: agentWalletDomain, systemPrompt } = response.data

      if (domain !== agentWalletDomain) {
        setError('Wallet domain does not match')
        return
      }

      setLastUsedAgentWalletAddress(walletAddressInput)
      setAgentWallet(walletAddressInput, domain, systemPrompt)
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Wallet not found') {
          setError('No wallet found with this address')
          return
        }
        if (error.message === 'Wallet domain does not match') {
          setError('This agent wallet uses a different domain')
          return
        }
      }
      setError('Error getting wallet details')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [
    domain,
    walletAddressInput,
    setLastUsedAgentWalletAddress,
    setAgentWallet,
  ])

  if (!authenticated || !user) {
    return null
  }

  if (agentWalletAddress) {
    return null
  }

  return (
    <div className="flex h-full w-full items-center justify-center backdrop-blur-sm">
      <div className="bg-white shadow-md rounded-md p-6 max-w-lg flex flex-col max-h-[32rem] overflow-y-auto border border-gray-200">
        <div className="flex flex-col mx-auto space-y-4">
          <h2 className="text-xl font-semibold text-center">
            Configure your Agent&apos;s Wallet
          </h2>

          <p className="text-gray-700">
            In order to start testing your agent, you will need to create a
            wallet for your agent from{' '}
            <a
              href="https://constella.one"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-gray-900 font-medium underline"
            >
              Constella
            </a>
          </p>

          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h3 className="font-medium mb-2">Creating a wallet on Constella</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Visit{' '}
                <a
                  href="https://constella.one"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-gray-900 font-medium underline"
                >
                  Constella
                </a>{' '}
                and connect with the same wallet that you have used to connect
                to this site.
              </li>
              <li>
                Create a new wallet, in the domain field enter the your personal
                domain link created by playground for your account{' '}
                <CodeHighlight>{domain}</CodeHighlight>
              </li>
              <li>
                Create a system prompt of your choice, and copy the wallet
                address of your newly created wallet. eg.{' '}
                <CodeHighlight>
                  You are a helpful assistant and will assist me by helping me
                  with all my financial tasks.
                </CodeHighlight>
              </li>
              <li>
                Remember your messages are not saved. Refreshing the page,
                resetting the agent or disconnecting your wallet will clear the
                conversation history.
              </li>
            </ol>
          </div>

          <p className="text-sm text-gray-500 italic">
            Note: You can only create one wallet for a given domain and system
            prompt. If you have already created a wallet address for your agent,
            you do not need to create a new wallet again.
          </p>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={walletAddressInput}
              onChange={(e) => {
                setWalletAddressInput(e.target.value)
                setError(null)
              }}
              placeholder="Agent's wallet address"
              className="w-full p-2 rounded-md border border-gray-300"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <CTAButton
              className="w-full"
              onClick={handleRegisterAgentWallet}
              disabled={!allowCreateWallet}
            >
              {isLoading ? 'Creating...' : 'Create Agent'}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
