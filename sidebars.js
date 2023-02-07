module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "index",
        "getstarted/account-signup",
        "getstarted/setup-profile",
        "getstarted/release-notes",
        "getstarted/known-bugs",
        "getstarted/whats-next",
      ],
    },
    {
      type: "category",
      label: "Virtual Resources",
      collapsed: false,
      items: [
        "virtualresources/instance-overview",
        "virtualresources/creating-new-instance",
        "virtualresources/quick-action",
        "virtualresources/resizing-your-instance",
        "virtualresources/enabling-saving-plan",
        "virtualresources/enabling-reserve-instance",
        "virtualresources/Accessing-Console",
        "virtualresources/Enabling-Monitoring",
        "virtualresources/Reinstalling-Instance",
        "virtualresources/Deleting-Instance",
        "virtualresources/VM-Scheduler",
        "virtualresources/Instance-Snapshots",
        "virtualresources/Affinity-Groups",
        "virtualresources/Adding-Notes",
      ],
    },
    {
      type: "category",
      label: "Storage & Snapshots",
      collapsed: false,
      items: [
        "StorageAndSnapshot/adding-new-volumes",
        "StorageAndSnapshot/resizing-root-volumes",
      ],
    },
  ],

  plugins: [
    {
      type: "category",
      label: "Plugins Documentation",
      collapsed: false,
      items: ["plugins"],
    },
  ],
  Marketplace: [
    {
      type: "category",
      label: "Introduction to Marketplace",
      collapsed: false,
      items: ["marketplace"],
    },
    {
      type: "category",
      label: "Database Apps",
      collapsed: false,
      items: [
        "marketplace-docs/database/MONGODB",
        "marketplace-docs/database/MYSQL",
        "marketplace-docs/database/PHPMYADMIN",
      ],
    },
    {
      type: "category",
      label: "Developer Apps",
      collapsed: false,
      items: [
        "marketplace-docs/developer-apps/DJANGO",
        "marketplace-docs/developer-apps/NODEJS",
      ],
    },
    {
      type: "category",
      label: "Hosting Apps",
      collapsed: false,
      items: [
        "marketplace-docs/hosting-apps/LAMP",
        "marketplace-docs/hosting-apps/LEMP",
        "marketplace-docs/hosting-apps/JOOMLA-LAMP",
        "marketplace-docs/hosting-apps/JOOMLA-LOMP",
        "marketplace-docs/hosting-apps/WORDPRESS",
      ],
    },
    {
      type: "category",
      label: "Hosting Panels",
      collapsed: false,
      items: [
        "marketplace-docs/hosting-panels/WEBMIN",
      ],
    },
    {
      type: "category",
      label: "Web Apps",
      collapsed: false,
      items: [
        "marketplace-docs/web-apps/NGINX",
      ],
    },
  ],
  APIs: [
    {
      type: "category",
      label: "API Docs",
      collapsed: false,
      items: ["apis"],
    },
  ],
};
