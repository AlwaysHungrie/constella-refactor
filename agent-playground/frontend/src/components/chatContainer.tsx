import MessageContainer from './chat/messageContainer'
import ProjectInfo from './zeroStates/projectInfo'
import RegisterAgentWallet from './zeroStates/registerAgentWallet'

export default function ChatContainer() {
  return (
    <div className="flex flex-col h-full w-full">
      <ProjectInfo />
      <RegisterAgentWallet />
      <MessageContainer />
    </div>
  )
}
