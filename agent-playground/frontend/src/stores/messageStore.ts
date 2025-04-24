import { create } from 'zustand'

export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  createdAt: Date
  state: 'pending' | 'sent' | 'received' | 'error'
  attestationUrl?: string
}

interface MessageStore {
  messages: Message[]
  addMessage: (message: Message) => void
  updateMessage: (id: string, message: Partial<Message>) => void
  deleteMessage: (id: string) => void
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  updateMessage: (id, message) =>
    set((state) => ({
      messages: state.messages.map((m) =>
        m.id === id ? { ...m, ...message } : m
      ),
    })),
  deleteMessage: (id) =>
    set((state) => ({ messages: state.messages.filter((m) => m.id !== id) })),
}))

export default useMessageStore
