'use client'

import { HiInformationCircle } from 'react-icons/hi'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useState } from 'react'

export default function ContentCard({
  title,
  popoverContent,
  children,
}: {
  title: string
  popoverContent: React.ReactNode
  children: React.ReactNode
}) {
  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <div className="flex flex-col rounded-md overflow-hidden">
      <div className="font-bold bg-brand p-2 text-white flex items-center justify-between">
        <span className="font-bold w-full">{title}</span>

        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <HiInformationCircle className="w-4 h-4" />
          </PopoverTrigger>
          <PopoverContent className="max-w-xs w-full text-sm bg-white p-2">
            {popoverContent}
          </PopoverContent>
        </Popover>
      </div>
      <div className="p-4 bg-white flex flex-col gap-2">{children}</div>
    </div>
  )
}
