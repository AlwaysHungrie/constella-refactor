'use client'

import { usePrivy } from '@privy-io/react-auth'
import ChatInput from './input'
import { useAgentWalletStore } from '@/stores/agentWalletStore'
import useMessageStore from '@/stores/messageStore'
import Message from './message'
import { useCallback, useRef } from 'react'

export default function MessageContainer() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { messages } = useMessageStore()
  const { authenticated, user } = usePrivy()
  const { address: agentWalletAddress } = useAgentWalletStore()

  const handleScrollBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [])

  if (!authenticated || !user || !agentWalletAddress) {
    return null
  }

  return (
    <div
      className="flex flex-col h-full w-full relative overflow-y-auto"
      ref={scrollRef}
    >
      <div className="flex flex-col h-full w-full max-w-2xl mx-auto py-4 gap-2">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div className="min-h-16" />
      </div>
      <ChatInput onScrollBottom={handleScrollBottom} />
    </div>
  )
}
