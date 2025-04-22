'use client'

import { useAgentWalletStore } from '@/stores/agentWalletStore'

export default function AgentDetails() {
  const { address, domain, systemPrompt, clearAgentWallet } =
    useAgentWalletStore()

  if (!address || !domain || !systemPrompt) {
    return null
  }

  return (
    <div className="flex flex-col text-left my-auto">
      <div className="flex justify-between">
        <p className="text-sm font-medium">Agent Connected</p>
        <button
          className="text-xs font-medium p-1 rounded-sm bg-black text-white opacity-40 hover:opacity-100 transition-opacity"
          onClick={clearAgentWallet}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col gap-2 bg-gray-200 p-2 rounded-md mt-2">
        <div className="flex flex-col">
          <p className="text-sm">Address</p>
          <input
            type="text"
            value={address || ''}
            readOnly
            className="flex-1 text-xs bg-white p-1 rounded-[3px] border border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Domain</p>
          <input
            type="text"
            value={domain || ''}
            readOnly
            className="flex-1 text-xs bg-white p-1 rounded-[3px] border border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">System Prompt</p>
          <textarea
            value={systemPrompt || ''}
            readOnly
            className="flex-1 text-xs bg-white p-1 rounded-[3px] border border-gray-300"
            rows={5}
          />
        </div>
      </div>
    </div>
  )
}
