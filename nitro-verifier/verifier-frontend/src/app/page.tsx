'use client'

import React, { useState } from 'react'
import { TITLE, TOOL_MODES, ToolMode } from '@/config'
import Head from 'next/head'
import Header from '@/components/header'
import ToolSwitcher from '@/components/toolSwitcher'
import AttestationFetcher from '@/components/attestationFetcher'
import { DEFAULT_ATTESATION, DEFAULT_AWS_ROOT, DEFAULT_DOMAIN } from '@/config/constellaDefaults'

export default function Home() {
  const [toolMode, setToolMode] = useState<ToolMode>(TOOL_MODES[0])

  const [domain, setDomain] = useState<string>(DEFAULT_DOMAIN)
  const [attestation, setAttestation] = useState<string>(DEFAULT_ATTESATION)
  const [awsRootCertificate, setAwsRootCertificate] = useState<string>(
    DEFAULT_AWS_ROOT
  )

  const handleToolModeChange = (toolMode: ToolMode) => {
    setToolMode(toolMode)
    if (toolMode === 'constella') {
      setDomain(DEFAULT_DOMAIN)
      setAttestation(DEFAULT_ATTESATION)
    } else {
      setDomain('')
      setAttestation('')
    }
  }

  return (
    <>
      <Head>
        <title>{TITLE[toolMode].title}</title>
        <meta name="description" content={TITLE[toolMode].description} />
      </Head>

      <div className="flex flex-col min-h-screen max-w-2xl mx-auto p-4">
        <Header toolMode={toolMode} />
        <ToolSwitcher toolMode={toolMode} setToolMode={handleToolModeChange} />
        <div className="flex flex-col gap-4 mt-8">
          <AttestationFetcher
            toolMode={toolMode}
            domain={domain}
            setDomain={setDomain}
            setAttestation={setAttestation}
          />
        </div>
      </div>
    </>
  )
}
