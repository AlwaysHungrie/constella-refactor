'use client'
import useUserStore from '@/stores/userStore'
import SidebarHeader from './sidebar/header'
import ConnectWallet from './connectWallet'

const CodeHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-red-100 text-gray-800 font-mono px-2 py-0.5 rounded text-sm">
    {children}
  </span>
)

export default function ProjectInfo() {
  const { token, address } = useUserStore()

  if (token && address) {
    return null
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-900/80 backdrop-blur-sm">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg flex flex-col max-h-[32rem] overflow-y-auto">
        <div className="flex flex-col mx-auto items-center">
          <SidebarHeader />
        </div>

        <div className="flex flex-col mx-auto space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-center">
            Welcome to Constella Agent Playground
          </h2>

          <p className="text-gray-700">
            This is a testing environment where you can experiment with AI
            agents that interact with a Constella wallet.
          </p>

          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h3 className="font-medium mb-2">Getting Started</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Connect your wallet to obtain your personal{' '}
                <CodeHighlight>domain</CodeHighlight> link
              </li>
              <li>
                Visit{' '}
                <a
                  href="https://constella.one"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-gray-900 font-medium underline"
                >
                  Constella
                </a>{' '}
                to create a wallet for your agent
              </li>
              <li>
                Use the same <CodeHighlight>domain</CodeHighlight> and add a{' '}
                <CodeHighlight>system prompt</CodeHighlight> of your choice
              </li>
            </ol>
          </div>

          <p className="text-sm text-gray-500 italic">
            Note: Agents and messages are not permanently stored. If you refresh
            the page, you&apos;ll need to recreate your agents and lose all
            previous messages.
          </p>

          <ConnectWallet />
        </div>
      </div>
    </div>
  )
}
