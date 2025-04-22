import ChatContainer from '@/components/chatContainer'
import SidebarContainer from '@/components/sidebar/sidebarContainer'

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <SidebarContainer />
      <ChatContainer />
    </div>
  )
}
