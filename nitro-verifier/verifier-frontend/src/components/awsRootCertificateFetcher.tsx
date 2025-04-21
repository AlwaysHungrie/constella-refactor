import { ToolMode } from '@/config'
import ContentCard from './contentCard'
import { HiCheckCircle } from 'react-icons/hi'
import { DEFAULT_AWS_ROOT_LINK } from '@/config/constellaDefaults'

const formatDate = (date: Date) => {
  // return only time
  return date.toLocaleTimeString()
}

export default function AwsRootCertificateFetcher({
  toolMode,
  awsRootCertificate,
  setAwsRootCertificate,
  awsFetchedOn,
}: {
  toolMode: ToolMode
  awsRootCertificate: string
  setAwsRootCertificate: (awsRootCertificate: string) => void
  awsFetchedOn: Date
}) {
  return (
    <ContentCard title="AWS Root Certificate" defaultCollapsed={true}>
      {toolMode === 'constella' ? (
        <p className="flex items-center gap-2 font-bold">
          <HiCheckCircle className="w-4 h-4" />
          Fetched today at {formatDate(awsFetchedOn)}
          &nbsp;from
          <a
            href={DEFAULT_AWS_ROOT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            Amazon
          </a>
        </p>
      ) : (
        <input
          type="text"
          value={awsRootCertificate}
          className="rounded-sm p-2 border border-gray-300"
          onChange={(e) => setAwsRootCertificate(e.target.value)}
        />
      )}
      <p className="leading-5">
        The AWS Root Certificate is published by Amazon and is used to sign
        Nitro Enclave Attestation Certificates.
        <br />
        <br />
        An invalid certificate or a certificate not created from inside a
        trusted execution environment will not be signed by this public key.
      </p>
    </ContentCard>
  )
}
