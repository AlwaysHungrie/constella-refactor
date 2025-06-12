import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Autonomous Agents',
      items: [
        'autonomous-agents/intro',
        'autonomous-agents/why',
        'autonomous-agents/potential-applications',
      ],
    },
    {
      type: 'category',
      label: 'Quickstart',
      items: [
        'quickstart/getting-a-wallet',
        'quickstart/configure-transactions',
        'quickstart/execute-transactions',
      ],
    },
    {
      type: 'category',
      label: 'Verifing Constella',
      items: [
        'verify-constella/security',
        'verify-constella/pineappl-nitro-tee-verifier'
      ],
    },
    'tlsn-notary',
  ],
}

export default sidebars
