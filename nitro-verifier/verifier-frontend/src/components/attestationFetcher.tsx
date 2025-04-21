'use client'

import { ToolMode } from '@/config'
import ContentCard from './contentCard'

export default function AttestationFetcher({
  toolMode,
  domain,
  setDomain,
  setAttestation,
}: {
  toolMode: ToolMode
  domain: string
  setDomain: (domain: string) => void
  setAttestation: (attestation: string) => void
}) {
  const fetchAttestation = async () => {
    if (!domain) return
    try {
      const response = await fetch(domain)
      const data = await response.json()
      setAttestation(data.attestation)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ContentCard
      title={
        toolMode === 'constella'
          ? 'Constella'
          : 'Verify AWS Nitro Enabled Instance'
      }
      popoverContent={
        <p className="text-sm max-w-xs">
          The server needs to return a{' '}
          <a
            href="https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html"
            target="_blank"
            rel="noreferrer"
            className="underline"
            style={{ textDecoration: 'underline' }}
          >
            valid attestation
          </a>{' '}
          certificate when a request is made to this endpoint.
          <br />
          <br />
          Example:{' '}
          <a
            href="https://api.constella.one/api/verify?devmode=true"
            target="_blank"
            rel="noreferrer"
            className="underline"
            style={{ textDecoration: 'underline' }}
          >
            https://api.constella.one/api/verify?devmode=true
          </a>
        </p>
      }
    >
      <>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter a domain"
          className="rounded-sm p-2 border border-gray-300"
          readOnly={toolMode === 'constella'}
          disabled={toolMode === 'constella'}
        />
        <button
          onClick={fetchAttestation}
          className="bg-brand text-white font-bold p-2 rounded-sm hover:bg-brand/80 cursor-pointer transition-colors"
        >
          Request Attestation
        </button>
      </>
    </ContentCard>
  )
}
