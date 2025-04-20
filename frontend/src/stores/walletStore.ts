import { create } from 'zustand'

export interface Wallet {
  walletAddress: string
  domain: string
}

export interface WalletStore {
  wallets: Wallet[]
  setWallets: (wallets: Wallet[]) => void
  addWallet: (wallet: Wallet) => void
  deleteWallet: (walletAddress: string) => void
}

export const useWalletStore = create<WalletStore>((set) => ({
  wallets: [],
  setWallets: (wallets: Wallet[]) => set({ wallets }),
  addWallet: (wallet: Wallet) =>
    set((state) => ({ wallets: [...state.wallets, wallet] })),
  deleteWallet: (walletAddress: string) =>
    set((state) => ({
      wallets: state.wallets.filter(
        (wallet) => wallet.walletAddress !== walletAddress
      ),
    })),
}))
