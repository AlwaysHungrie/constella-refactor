import { create } from 'zustand'

interface Wallet {
  id: string
  address: string
}

export interface WalletStore {
  wallets: Wallet[]
  setWallets: (wallets: Wallet[]) => void
}

export const useWalletStore = create<WalletStore>((set) => ({
  wallets: [],
  setWallets: (wallets: Wallet[]) => set({ wallets }),
}))
