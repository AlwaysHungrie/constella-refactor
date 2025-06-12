'use client'

import { useCallback, useState } from 'react'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'
import useMessageStore from '@/stores/messageStore'
import useUserStore from '@/stores/userStore'
import { authorizedPostRequest } from '@/utils/api'

export default function ChatInput({
  onScrollBottom,
}: {
  onScrollBottom: () => void
}) {
  const { token } = useUserStore()
  const [message, setMessage] = useState('')
  const { addMessage, messages, updateMessage } = useMessageStore()
  const lastMessage = messages[messages.length - 1]
  const allowSend = message.trim() !== '' && lastMessage?.state !== 'pending'

  const handleSend = useCallback(
    async (userMessage: string) => {
      if (!allowSend || !token) return
      if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
        throw new Error('NEXT_PUBLIC_OPENAI_API_KEY is not set')
      }

      addMessage({
        id: Math.random().toString(36).substring(2, 15),
        content: userMessage,
        role: 'user',
        createdAt: new Date(),
        state: 'sent',
      })

      setMessage('')

      const botMessageId = Math.random().toString(36).substring(2, 15)
      addMessage({
        id: botMessageId,
        content: '',
        role: 'assistant',
        createdAt: new Date(),
        state: 'pending',
      })

      try {
        const response = await authorizedPostRequest(token, 'message', {
          message: userMessage,
          apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        })

        const { attestation_url, llm_response } = response.result
        const message = llm_response?.choices[0]?.message.content
        
        updateMessage(botMessageId, {
          content: message,
          state: 'sent',
          attestationUrl: attestation_url,
        })
      } catch (error) {
        console.error(error)
        updateMessage(botMessageId, {
          content: 'Error',
          state: 'error',
        })
      }
    },
    [addMessage, updateMessage, allowSend]
  )

  return (
    <div className="fixed bottom-4 left-[256px] right-0 pointer-events-none">
      <div className="bg-white shadow-md rounded-md flex items-center justify-center max-w-lg mx-auto pointer-events-auto px-2 border border-gray-300">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full p-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSend(message)
            }
          }}
        />
        <button
          className="bg-black text-white p-2 rounded-md hover:opacity-80 transition-opacity disabled:opacity-20 cursor-pointer"
          disabled={!allowSend}
          onClick={() => handleSend(message)}
        >
          <HiOutlinePaperAirplane className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
