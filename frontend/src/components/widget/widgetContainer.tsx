import ConnectWallet from './connectWallet'
import DisconnectWallet from './disconnectWallet'
import WalletsContainer from './walletsContainer'
import { Checkbox } from '../checkbox'

export default function WidgetContainer() {
  return (
    <div className="flex-1 flex flex-col aspect-[3/4] max-h-[calc(100vh-10rem)] max-w-[400px] py-4">
      <div className="flex flex-col flex-1 border border-[#004400] bg-[#e2ebe215] backdrop-blur-[2px] overflow-y-auto px-6 py-4 rounded-lg">
        <div className="flex flex-col gap-2 text-textgreen">
          <div className="text-2xl font-bold mx-auto">Constella Wallet</div>
          <div className="mt-2">
            Constella is a wallet for Autonomous Agents.
          </div>
          {[
            {
              label: 'Runs in a isolated secure environment',
              checked: true,
            },
            {
              label: 'Can never be accessed by humans',
              checked: true,
            },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2">
              <Checkbox checked={item.checked} />
              {item.label}
            </div>
          ))}
        </div>

        <ConnectWallet />
        <WalletsContainer />
      </div>
      <DisconnectWallet />
    </div>
  )
}
