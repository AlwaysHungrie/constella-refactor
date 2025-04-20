// zustand store for dialogs

import { create } from 'zustand'

interface DialogStore {
  isOpen: boolean
  title: string
  markdownDescription: string
  onClose: () => void
  onOpen: (title: string, markdownDescription: string) => void
}

export const useDialogStore = create<DialogStore>((set) => ({
  isOpen: false,
  title: '',
  markdownDescription: '',
  onClose: () => set({ isOpen: false }),
  onOpen: (title: string, markdownDescription: string) =>
    set({ isOpen: true, title, markdownDescription }),
}))
