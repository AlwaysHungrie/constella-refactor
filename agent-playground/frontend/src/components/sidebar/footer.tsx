import { Fragment } from "react";

export default function SidebarFooter() {
  return (
    <div className="mt-auto flex gap-2 flex-wrap">
      {[
        {
          label: 'Constella',
          href: 'https://constella.one',
        },
        {
          label: 'Create Agent',
          href: 'https://docs.constella.one',
        },
        {
          label: 'Github',
          href: 'https://github.com/AlwaysHungrie/constella-refactor',
        },
        {
          label: 'Verify Constella',
          href: 'https://pineapple.xyz',
        },
        {
          label: 'Twitter',
          href: 'https://x.com/AlwaysHungrie',
        },
      ].map((item, index) => (
        <Fragment key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap hover:underline text-sm leading-3"
          >
            {item.label}
          </a>
          {index !== 4 && (
            <div className="text-sm text-gray-500 leading-3">|</div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
