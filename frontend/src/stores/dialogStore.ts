// zustand store for dialogs

import { create } from 'zustand'

interface DialogStore {
  isOpen: boolean
  title: string
  description: string
  onClose: () => void
  onOpen: (title: string, description: string) => void
}

export const useDialogStore = create<DialogStore>((set) => ({
  isOpen: false,
  title: '',
  description: '',
  onClose: () => set({ isOpen: false }),
  onOpen: (title: string, description: string) =>
    set({ isOpen: true, title, description }),
}))
