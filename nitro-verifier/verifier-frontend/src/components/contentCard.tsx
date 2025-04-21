'use client'

import { HiChevronDown, HiChevronUp, HiInformationCircle } from 'react-icons/hi'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useState } from 'react'

export default function ContentCard({
  title,
  popoverContent,
  children,
  defaultCollapsed = false,
}: {
  title: string
  popoverContent?: React.ReactNode
  children: React.ReactNode
  defaultCollapsed?: boolean
}) {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  return (
    <div className="flex flex-col rounded-md overflow-hidden">
      <div className="font-bold bg-brand p-2 text-white flex items-center justify-between">
        <span className="font-bold w-full">{title}</span>

        {popoverContent && (
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild className="cursor-pointer mr-2 text-xl">
              <HiInformationCircle />
            </PopoverTrigger>
            <PopoverContent className="max-w-xs w-full text-sm bg-white p-2">
              {popoverContent}
            </PopoverContent>
          </Popover>
        )}

        <div
          className="flex items-center gap-2 cursor-pointer bg-white rounded-xs p-1 text-black"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <HiChevronDown className="w-4 h-4" />
          ) : (
            <HiChevronUp className="w-4 h-4" />
          )}
        </div>
      </div>
      {!collapsed && (
        <div className="p-4 bg-white flex flex-col gap-2">{children}</div>
      )}
    </div>
  )
}
