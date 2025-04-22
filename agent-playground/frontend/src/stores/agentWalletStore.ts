// zustand store for dialogs

import { create } from 'zustand'

interface AgentWalletStore {
  address: string | null
  domain: string | null
  systemPrompt: string | null

  setAgentWallet: (
    address: string,
    domain: string,
    systemPrompt: string
  ) => void
  clearAgentWallet: () => void
}

export const useAgentWalletStore = create<AgentWalletStore>((set) => ({
  address: null,
  domain: null,
  systemPrompt: null,
  setAgentWallet: (address: string, domain: string, systemPrompt: string) =>
    set({ address, domain, systemPrompt }),
  clearAgentWallet: () =>
    set({ address: null, domain: null, systemPrompt: null }),
}))
