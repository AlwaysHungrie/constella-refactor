// const SERVER_URL = 'https://nitro-verifier.pineappl.xyz/api'
export const SERVER_URL = 'http://localhost:4001'

export const TOOL_MODES = ['constella', 'tool'] as const
export type ToolMode = (typeof TOOL_MODES)[number]

export const TITLE: Record<
  ToolMode,
  {
    title: string
    description: string
  }
> = {
  constella: {
    title: 'Verify Constella',
    description: 'Verify integrity of Constella Wallet',
  },
  tool: {
    title: 'Nitro Attestation Verifier',
    description: 'AWS Nitro Enclave Verification Tool',
  },
}
