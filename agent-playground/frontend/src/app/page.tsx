import MessageContainer from '@/components/messageContainer'
import SidebarContainer from '@/components/sidebar/sidebarContainer'

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <SidebarContainer />
      <MessageContainer />
    </div>
  )
}
