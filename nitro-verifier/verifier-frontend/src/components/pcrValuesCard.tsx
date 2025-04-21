import { ToolMode } from '@/config'
import ContentCard from './contentCard'
import { DEFAULT_GITHUB_LINK } from '@/config/constellaDefaults'

export default function PcrValuesCard({
  toolMode,
  pcrValues,
  setPcrValues,
}: {
  toolMode: ToolMode
  pcrValues: string
  setPcrValues: (pcrValues: string) => void
}) {
  return (
    <ContentCard
      title={toolMode === 'constella' ? 'Constella Codebase' : 'PCR Values'}
      defaultCollapsed={true}
      popoverContent={
        <p className="leading-5">
          The PCR stands for Platform Configuration Registers and represents the
          state of the platform i.e. the code that is running inside the Nitro
          Enclave. These can be obtained by building the codebase and running
          inside your own Nitro Enclave enbaled system.
          <br />
          <br />
          Constella&apos;s also posts its PCR values{' '}
          <a
            href={DEFAULT_GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            here
          </a>{' '}
          for public verification.
        </p>
      }
    >
      <textarea
        value={pcrValues}
        onChange={(e) => setPcrValues(e.target.value)}
        placeholder="PCR0, PCR1, PCR2"
        className="rounded-sm p-2 border border-gray-300"
      />
      {toolMode === 'constella' && (
        <p className="leading-5">
          These PCR values were obtained from&nbsp;
          <a
            href={DEFAULT_GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            this
          </a>
          &nbsp;github repository, instructions on how to build your own image
          to obtain these values can also be found there.
        </p>
      )}
    </ContentCard>
  )
}
