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
          lastVersion: "current",
          versions: {
            current: {
              label: "3.0.0",
              path: "3.0.0",
            },
          },
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
  plugins: [require.resolve("docusaurus-lunr-search")],

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
          { to: "/blog", label: "Blog", position: "left" },

          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
            dropdownActiveClassDisabled: true,
          },
          {
            type: "search",
            position: "right",
          },
          {
            label: "Community",
            position: "right",
            items: [
              {
                href: "https://ionicframework.com/community",
                label: "Community Hub",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://forum.ionicframework.com/",
                label: "Forum",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://www.meetup.com/topics/ionic-framework/",
                label: "Meetups",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://blog.ionicframework.com/",
                label: "Blog",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://twitter.com/ionicframework",
                label: "Twitter",
                target: "_blank",
                rel: null,
              },
            ],
            className: "navbar__link--community",
          },
          {
            label: "Support",
            position: "right",
            items: [
              {
                href: "https://ionicframework.com/support",
                label: "Help Center",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://ionic.zendesk.com/",
                label: "Customer Support",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://ionicframework.com/advisory",
                label: "Enterprise Advisory",
                target: "_blank",
                rel: null,
              },
            ],
            className: "navbar__link--support",
          },

          // {
          //   type: "separator",
          //   position: "right",
          // },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          //   dropdownItemsBefore: [],
          //   dropdownItemsAfter: [
          //     {
          //       href: "https://ionicframework.com/translate",
          //       label: "Translate",
          //       target: "_blank",
          //       rel: null,
          //     },
          //   ],
          //   className: "icon-link language navbar__item",
          // },
          // {
          //   type: "iconLink",
          //   position: "right",
          //   icon: {
          //     alt: "twitter logo",
          //     src: `/logos/twitter.svg`,
          //     href: "https://twitter.com/Ionicframework",
          //     target: "_blank",
          //   },
          // },
          // {
          //   type: "iconLink",
          //   position: "right",
          //   icon: {
          //     alt: "github logo",
          //     src: `/logos/github.svg`,
          //     href: "https://github.com/ionic-team/ionic-framework",
          //     target: "_blank",
          //   },
          // },
          // {
          //   type: "iconLink",
          //   position: "right",
          //   icon: {
          //     alt: "discord logo",
          //     src: `/logos/discord.svg`,
          //     href: "https://ionic.link/discord",
          //     target: "_blank",
          //   },
          // },
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
