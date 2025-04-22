'use client'

import SidebarFooter from './footer'
import SidebarHeader from './header'
import Domain from '../wallet/domain'
import AgentDetails from './agentDetails'

export default function SidebarContainer() {
  return (
    <div className="flex flex-col h-full w-full max-w-64 border-r border-gray-200 bg-gray-100">
      <div className="flex-1 flex flex-col p-4 text-center">
        <SidebarHeader />
        <Domain />
        <AgentDetails />
        <SidebarFooter />
      </div>
    </div>
  )
}
