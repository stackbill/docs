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
        "StorageAndSnapshot/resizing-data-volumes",
        "StorageAndSnapshot/creating-templates-from-volumes",
        "StorageAndSnapshot/deleting-volumes",
      ],
    },
    {
      type: "doc",
      id: "Loadbalancer",
      label: "Loadbalancer",
    },
    {
      type: "doc",
      id: "Autoscaling",
      label: "Autoscaling",
    },
    {
      type: "doc",
      id: "SSH-Keymanager",
      label: "SSH-Keymanager",
    },
    {
      type: "category",
      label: "Network",
      collapsed: false,
      items: [
        "Network/Creating-New-Network",
        "Network/Adding-network-to-Instance",
        "Network/Network-Egress-Firewall",
        "Network/VPC",
        "Network/VPN-Gateway",
        "Network/Security-Group-Firewall",
        "Network/IP-Manager",
      ],
    },
    {
      type: "category",
      label: "Marketplace",
      collapsed: false,
      items: [
        "Marketplace/Overview",
        "Marketplace/Launching-Apps",
        "Marketplace/Uploading-Apps",
      ],
    },
    {
      type: "category",
      label: "Monitoring",
      collapsed: false,
      items: [
        "Monitoring/Dashboard-Overview",
        "Monitoring/Adding-Instance",
        "Monitoring/Setting-Up-Alerts",
        "Monitoring/Notification-Manager",
      ],
    },
    {
      type: "category",
      label: "Billing",
      collapsed: false,
      items: [
        "Billing/Overview",
        "Billing/Cost-Explorer",
        "Billing/Saving-Plans",
        "Billing/Invoices",
        "Billing/Reporting",
      ],
    },
    {
      type: "category",
      label: "Organization",
      collapsed: false,
      items: [
        "Organization/User-Profile",
        "Organization/User-Manage",
        "Organization/RBAC",
        "Organization/Quota-Limits",
        "Organization/Maintanance-Events",
        "Organization/My-Activity",
      ],
    },
    {
      type: "doc",
      id: "HelpCenter",
      label: "HelpCenter",
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
      label: "Get started",
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
        "marketplace-docs/database/POSTGRESQL",
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