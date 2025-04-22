import { Message as MessageType } from '@/stores/messageStore'

export default function Message({ message }: { message: MessageType }) {
  if (message.role === 'user') {
    return (
      <div className="flex flex-col items-end">
        <div className="flex flex-col p-2 rounded-md bg-gray-100 max-w-sm">
          {message.content}
        </div>
        <div className="text-xs text-gray-500">You</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-2 rounded-md bg-black text-white max-w-sm">
        {message.content}
        {message.state === 'pending' && <div>Thinking...</div>}
      </div>
      <div className="text-xs text-gray-500">Agent</div>
    </div>
  )
}
