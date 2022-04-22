// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'English Grammar',
  tagline: 'Apuntes y ejercicios para estudiar la gramática básica del idioma Inglés.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'matahj', // Usually your GitHub org/user name.
  projectName: 'docuGrammar', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarTitle: 'Poster',
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Inicio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Apunes',
          },
          {to: '/blog', label: 'Poster', position: 'left'},
          {
            href: 'https://github.com/matahj',
            label: '1001 Drops',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Apuntes',
                to: '/docs/intro',
              },
              {
                label: 'Poster',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: '1001 Drops',
                href: 'https://github.com/matahj/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/matahj',
              },
            ],
          },
          {
            title: 'Extras',
            items: [
              {
                label: 'Aplicación',
                href: 'https://play.google.com/store',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <span class="nombre">1001 Drops, S.C.</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
