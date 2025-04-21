'use client'

import SidebarFooter from "./footer"
import SidebarHeader from "./header"

export default function SidebarContainer() {
  return (
    <div className="flex flex-col h-full w-full max-w-64 border-r border-gray-200 bg-gray-100">
      <div className="flex-1 flex flex-col p-4 text-center">
        <SidebarHeader />
        <SidebarFooter />
      </div>
    </div>
  )
}
