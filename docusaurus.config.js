// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Basic English Grammar',
  tagline: 'Apuntes y ejercicios para estudiar la gramática básica del idioma Inglés.',
  url: 'https://docu-grammar.vercel.app/',
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
          editUrl: 'https://github.com/matahj',
        },
        blog: {
          blogSidebarTitle: 'Póster',
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/matahj',
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
          alt: '1001 Drops logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Apunes',
          },
          {to: '/blog', label: 'Póster', position: 'left'},
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
                label: 'Póster',
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
