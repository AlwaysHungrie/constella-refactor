'use client'

import { useState } from 'react'
import CTAButton from './ctaButton'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
export const CTAAccordian = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="flex flex-col">
      <CTAButton
        inverted
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between`}
      >
        {title}
        {isOpen ? (
          <HiChevronUp className="w-4 h-4" />
        ) : (
          <HiChevronDown className="w-4 h-4" />
        )}
      </CTAButton>
      {isOpen && (
        <div className="flex-1 flex flex-col bg-[#e2ebe215] rounded-b-sm gap-2 pt-4 px-2 pb-2">
          {children}
        </div>
      )}
    </div>
  )
}
