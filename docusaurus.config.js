const path = require("path");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Stackbill Documentation",
  tagline: "Stackbill Documentation",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  // plugins: [
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       routeBasePath: "/",
  //       sidebarPath: require.resolve("./sidebars.js"),

  //       exclude: ["README.md"],
  //       // lastVersion: "current",
  //       // versions: {
  //       //   current: {
  //       //     label: "v6",
  //       //     banner: "none",
  //       //   },
  //       // },
  //     },
  //   ],
  //   "@docusaurus/plugin-content-pages",
  //   "@docusaurus/plugin-debug",
  //   "@docusaurus/plugin-sitemap",
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Stackbill",
        logo: {
          alt: "Stackbill Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "User Guide",
          },
          // {
          //   type: "doc",
          //   docId: "Plugins",
          //   position: "left",
          //   label: "Plugins",
          // },
          // {
          //   type: "doc",
          //   docId: "MarketPlaceApps",
          //   position: "left",
          //   label: "MarketPlace Apps",
          // },
          // {
          //   type: "doc",
          //   docId: "api",
          //   position: "left",
          //   label: "APIs",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
