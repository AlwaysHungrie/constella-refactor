import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Constella',
  tagline: 'Wallet for Autonomous Agents',
  favicon: 'img/one.svg',

  // Set the production url of your site here
  url: 'https://docs.constella.one',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AlwaysHungrie', // Usually your GitHub org/user name.
  projectName: 'constella-refactor', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/AlwaysHungrie/constella-refactor/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/one.svg',
    navbar: {
      title: 'Constella',
      logo: {
        alt: 'Constella Logo',
        src: 'img/one.svg',
      },
      items: [
        {
          href: 'https://github.com/AlwaysHungrie/constella-refactor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Quickstart',
              to: '/category/quickstart',
            },
            {
              label: 'Wallet',
              href: 'https://constella.one',
            },
            {
              label: 'Verifier',
              href: 'https://nitro-verifier.pineappl.xyz',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/constella_one',
            },
            {
              label: 'Github',
              href: 'https://github.com/AlwaysHungrie/constella-refactor',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Duin',
              href: 'https://x.com/getduinbot',
            },
            {
              label: 'Agent Playground (coming soon)',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Constella Docs, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // BOTH POSTHOG CONFIG VARIABLES ARE PUBLIC
  plugins: [
    [
      'posthog-docusaurus',
      {
        apiKey: 'phc_QgawuhmdSI0cZfaKinC2ngMsTD43i9OEV9aEzskhaQr',
        appUrl: 'https://eu.i.posthog.com',
        enableInDevelopment: false,
      },
    ],
  ],
};

export default config;
