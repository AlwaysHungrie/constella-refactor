import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface UserState {
  token: string | null
  address: string | null
  isLoading: boolean

  agentWalletAddress: string | null

  setToken: (token: string, address: string) => void
  clearToken: () => void
  setLoading: (isLoading: boolean) => void

  setAgentWalletAddress: (agentWalletAddress: string) => void
  clearAgentWalletAddress: () => void
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      token: null,
      address: null,
      isLoading: true,
      agentWalletAddress: null,
      setToken: (token: string, address: string) => set({ token, address }),
      clearToken: () => set({ token: null, address: null }),
      setLoading: (isLoading: boolean) => set({ isLoading }),
      setAgentWalletAddress: (agentWalletAddress: string) =>
        set({ agentWalletAddress }),
      clearAgentWalletAddress: () => set({ agentWalletAddress: null }),
    }),
    {
      name: 'agent-playground-user-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setLoading(false)
        }
      },
    }
  )
)

export default useUserStore
