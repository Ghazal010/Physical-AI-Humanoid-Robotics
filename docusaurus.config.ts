import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Complete textbook for designing, simulating, and deploying humanoid robots with natural human interactions',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://physical-ai-humanoid-robotics-git-001-robotics-textbook-ghazal010.vercel.app', // Replace with your actual Vercel deployment URL
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ghazal010', // Usually your GitHub org/user name.
  projectName: 'Physical-AI-Humanoid-Robotics', // Usually your repo name.

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.ts',
          // Edit URL removed
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Edit URL removed
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          type: 'dropdown',
          label: 'Modules',
          position: 'left',
          items: [
            {
              label: 'Module 1: The Robotic Nervous System',
              to: '/docs/module-1',
            },
            {
              label: 'Module 2: The Digital Twin',
              to: '/docs/module-2',
            },
            {
              label: 'Module 3: The AI-Robot Brain',
              to: '/docs/module-3',
            },
            {
              label: 'Module 4: Vision-Language-Action',
              to: '/docs/module-4',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'about/course-overview',
          position: 'left',
          label: 'About',
        },
        {
          type: 'doc',
          docId: 'resources/hardware-requirements',
          position: 'left',
          label: 'Resources',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Course Overview',
              to: '/docs/about/course-overview',
            },
            {
              label: 'Learning Outcomes',
              to: '/docs/about/learning-outcomes',
            },
            {
              label: 'Curriculum',
              to: '/docs/module-1',
            },
          ],
        },
        {
          title: 'Modules',
          items: [
            {
              label: 'Module 1: Robotic Nervous System',
              to: '/docs/module-1',
            },
            {
              label: 'Module 2: Digital Twin',
              to: '/docs/module-2',
            },
            {
              label: 'Module 3: AI-Robot Brain',
              to: '/docs/module-3',
            },
            {
              label: 'Module 4: Vision-Language-Action',
              to: '/docs/module-4',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Prerequisites',
              to: '/docs/about/prerequisites',
            },
            {
              label: 'Hardware Requirements',
              to: '/docs/resources/hardware-requirements',
            },
            {
              label: 'Development Setup',
              to: '/docs/resources/development-environment',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/resources/troubleshooting',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Discussion Forums',
              href: '#',
            },
            {
              label: 'Office Hours',
              href: '#',
            },
            {
              label: 'Contact Us',
              href: '#',
            },
            {
              label: 'Further Reading',
              to: '/docs/resources/further-reading',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
