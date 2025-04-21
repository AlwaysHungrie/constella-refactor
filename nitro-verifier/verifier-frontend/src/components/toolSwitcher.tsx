import { TOOL_MODES, ToolMode } from '@/config'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'

const TabLabels = {
  constella: 'Constella',
  tool: 'Nitro Enclave',
  api: 'API',
}

export default function ToolSwitcher({
  toolMode,
  setToolMode,
}: {
  toolMode: ToolMode
  setToolMode: (toolMode: ToolMode) => void
}) {
  return (
    <div className="fixed bottom-0 p-4 max-w-2xl mx-auto w-full flex justify-center pointer-events-none">
      <div className="flex pointer-events-auto">
        <Tabs
          defaultValue={toolMode}
          onValueChange={(value) => setToolMode(value as ToolMode)}
        >
          <TabsList className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            {TOOL_MODES.map((mode) => (
              <TabsTrigger
                key={mode}
                value={mode}
                className="hover:text-gray-500 cursor-pointer"
              >
                {TabLabels[mode]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
