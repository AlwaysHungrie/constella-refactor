'use client'

import React, { useState } from 'react'
import { TITLE, TOOL_MODES, ToolMode } from '@/config'
import Head from 'next/head'
import Header from '@/components/header'
import ToolSwitcher from '@/components/toolSwitcher'
import AttestationFetcher from '@/components/attestationFetcher'
import {
  DEFAULT_ATTESATION,
  DEFAULT_AWS_ROOT,
  DEFAULT_DOMAIN,
  DEFAULT_EXPIRY_TIME,
  DEFAULT_PCR_VALUES,
} from '@/config/constellaDefaults'
import AwsRootCertificateFetcher from '@/components/awsRootCertificateFetcher'
import PcrValuesCard from '@/components/pcrValuesCard'
import VerifyAttestationCard from '@/components/verifyAttestationCard'
import CurlCommand from '@/components/curlCommand'

export default function Home() {
  const [toolMode, setToolMode] = useState<ToolMode>(TOOL_MODES[0])

  const [domain, setDomain] = useState<string>(DEFAULT_DOMAIN)
  const [attestation, setAttestation] = useState<string>('')
  const [pcrValues, setPcrValues] = useState<string>(DEFAULT_PCR_VALUES)

  const [useCustomExpiryTime, setUseCustomExpiryTime] = useState<boolean>(false)
  const [customExpiryDate, setCustomExpiryDate] = useState<string>(
    DEFAULT_EXPIRY_TIME.split('T')[0]
  )
  const [customExpiryTime, setCustomExpiryTime] = useState<string>(
    DEFAULT_EXPIRY_TIME.split('T')[1].slice(0, 5)
  )
  const [attestationISOTime, setAttestationISOTime] =
    useState<string>(DEFAULT_EXPIRY_TIME)

  const [awsRootCertificate, setAwsRootCertificate] =
    useState<string>(DEFAULT_AWS_ROOT)
  const [awsFetchedOn] = useState<Date>(new Date())

  const handleToolModeChange = (toolMode: ToolMode) => {
    setToolMode(toolMode)
    if (toolMode === 'constella') {
      setDomain(DEFAULT_DOMAIN)
      setAttestation(DEFAULT_ATTESATION)
      setPcrValues(DEFAULT_PCR_VALUES)
    } else {
      setDomain('')
      setAttestation('')
      setPcrValues('')
    }
  }

  if (toolMode === 'api') {
    return (
      <>
        <Head>
          <title>{TITLE[toolMode].title}</title>
          <meta name="description" content={TITLE[toolMode].description} />
        </Head>

        <div className="flex flex-col min-h-screen max-w-2xl mx-auto p-4 pb-16">
          <Header toolMode={toolMode} />
          <ToolSwitcher
            toolMode={toolMode}
            setToolMode={handleToolModeChange}
          />
          <div className="flex flex-col gap-4 mt-8">
            <CurlCommand />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{TITLE[toolMode].title}</title>
        <meta name="description" content={TITLE[toolMode].description} />
      </Head>

      <div className="flex flex-col min-h-screen max-w-2xl mx-auto p-4 pb-16">
        <Header toolMode={toolMode} />
        <ToolSwitcher toolMode={toolMode} setToolMode={handleToolModeChange} />
        <div className="flex flex-col gap-4 mt-8">
          <AttestationFetcher
            toolMode={toolMode}
            domain={domain}
            setDomain={setDomain}
            setAttestation={setAttestation}
            setAttestationISOTime={setAttestationISOTime}
          />

          <AwsRootCertificateFetcher
            toolMode={toolMode}
            awsRootCertificate={awsRootCertificate}
            setAwsRootCertificate={setAwsRootCertificate}
            awsFetchedOn={awsFetchedOn}
          />

          <PcrValuesCard
            toolMode={toolMode}
            pcrValues={pcrValues}
            setPcrValues={setPcrValues}
          />

          <VerifyAttestationCard
            toolMode={toolMode}
            attestation={attestation}
            setAttestation={setAttestation}
            pcrValues={pcrValues}
            awsRootCertificate={awsRootCertificate}
            attestationISOTime={attestationISOTime}
            useCustomExpiryTime={useCustomExpiryTime}
            customExpiryDate={customExpiryDate}
            customExpiryTime={customExpiryTime}
            setUseCustomExpiryTime={setUseCustomExpiryTime}
            setCustomExpiryDate={setCustomExpiryDate}
            setCustomExpiryTime={setCustomExpiryTime}
          />
        </div>
      </div>
    </>
  )
}
