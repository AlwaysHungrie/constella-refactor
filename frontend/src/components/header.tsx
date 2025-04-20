'use client'
import { useDialogStore } from '@/stores/dialogStore'
import { Fragment } from 'react'

const ITEMS = [
  {
    item: 'How it works',
  },
  {
    item: 'Verify Constella',
  },
  {
    item: 'Docs',
  },
]

export default function Header() {
  const { onOpen } = useDialogStore()

  const handleOpenDialog = (item: string) => {
    onOpen(item, 'Dialog Description')
  }

  const onClickOption = (item: string) => {
    handleOpenDialog(item)
  }

  return (
    <div className="flex flex-col items-center">
      <pre className="text-[4px] md:text-[8px] text-brand-500 select-none">
        {`
 ██████╗ ██████╗ ███╗   ██╗███████╗████████╗███████╗██╗     ██╗      █████╗      ██╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔════╝██║     ██║     ██╔══██╗   ████║
██║     ██║   ██║██╔██╗ ██║███████╗   ██║   █████╗  ██║     ██║     ███████║    ╚██║
██║     ██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══╝  ██║     ██║     ██╔══██║     ██║
╚██████╗╚██████╔╝██║ ╚████║███████║   ██║   ███████╗███████╗███████╗██║  ██║     ██║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝     ╚═╝
                                                                                    `}
      </pre>
      <div className="flex text-brand-600">
        {ITEMS.map((item, index) => (
          <Fragment key={item.item}>
            <div
              key={item.item}
              className="cursor-pointer hover:opacity-80"
              onClick={() => onClickOption(item.item)}
            >
              {item.item}
            </div>
            {index !== ITEMS.length - 1 && (
              <div className="text-brand-500 mx-2">|</div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
