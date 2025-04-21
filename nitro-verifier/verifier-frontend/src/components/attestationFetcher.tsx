'use client'

import { ToolMode } from '@/config'
import ContentCard from './contentCard'
import { DEFAULT_ATTESATION, DEFAULT_DOMAIN } from '@/config/constellaDefaults'
export default function AttestationFetcher({
  toolMode,
  domain,
  setDomain,
  setAttestation,
  setAttestationISOTime,
}: {
  toolMode: ToolMode
  domain: string
  setDomain: (domain: string) => void
  setAttestation: (attestation: string) => void
  setAttestationISOTime: (attestationISOTime: string) => void
}) {
  const fetchAttestation = async () => {
    if (!domain) return
    if (toolMode === 'constella' && domain === DEFAULT_DOMAIN) {
      setAttestation(DEFAULT_ATTESATION)
      setAttestationISOTime(new Date().toISOString())
      return
    }
    try {
      const response = await fetch(domain)
      const body = await response.text()
      setAttestation(body)
      setAttestationISOTime(new Date().toISOString())
    } catch (error) {
      console.error(error)
      alert('Error fetching attestation, please check the domain and try again')
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

        {toolMode === 'constella' && (
          <>
            <p className="leading-5">
              Constella Backend returns an &quot;Attestation Certificate&quot;
              which can be verified using this tool. Successful verification of
              the certificate guarantees that:
            </p>
            <ol className="list-decimal pl-5">
              <li className="">
                Constella backend is running inside a nitro enclave
              </li>
              <li className="">
                Code running inside the enclave is the exact same code as
                published on its github repository
              </li>
            </ol>
          </>
        )}
      </>
    </ContentCard>
  )
}
