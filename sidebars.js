module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "Index",
        "getstarted/Account-Signup",
        "getstarted/Setup-Profile",
        "getstarted/Release-Notes",
        "getstarted/Known-Bugs",
        "getstarted/Whats-Next",
      ],
    },
    {
      type: "category",
      label: "Virtual Resources",
      collapsed: false,
      items: [
        "virtualresources/Introduction",
        "virtualresources/Instance",
      ],
    },
    {
      type: "category",
      label: "Storage & Snapshots",
      collapsed: false,
      items: [
        "StorageAndSnapshot/introduction",
        "StorageAndSnapshot/volume",
        "StorageAndSnapshot/Extend-root-volume",
        "StorageAndSnapshot/attach-data-volume",
        "StorageAndSnapshot/extend-data-volume",
      ],
    },
    {
      type: "category",
      label: "Volume Snapshot",
      collapsed: false,
      items: [
        "volume-snapshot/introduction",
        "volume-snapshot/add-volume-snapshot",
        "volume-snapshot/creating-template-from-a-volume",
        "volume-snapshot/delete-volume-snapshot",
      ],
    },
    {
      type: "category",
      label: "VM Snapshot",
      collapsed: false,
      items: [
        "vm-snapshot/introduction",
        "vm-snapshot/creating-a-vm-snapshot",
        "vm-snapshot/how-to-revertback-vmsnapshot",
      ],
    },
    {
      type: "category",
      label: "Auto Scaling",
      collapsed: false,
      items: [
        "autoscalling/introduction",
        "autoscalling/autoscaling-overview",
        "autoscalling/autoscaling-deployment",
      ],
    },
    {
      type: "category",
      label: "SSH Keymanager",
      collapsed: false,
      items: [
        "ssh-keymanager/introduction",
        "ssh-keymanager/create-new-ssh",
        "ssh-keymanager/uploading-the-existing-key",
        "ssh-keymanager/download-ssh-key",
        "ssh-keymanager/delete-ssh-key",
      ],
    },
    {
      type: "category",
      label: "Affinity Group",
      collapsed: false,
      items: [
        "affinity-groups/what-is-affinitygroup",
        "affinity-groups/creating-an-affinitygroup",
      ],
    },
    {
      type: "category",
      label: "Network",
      collapsed: false,
      items: [
        "Network/introduction",
        "Network/basic-network",
        "Network/VPN-Gateway",
        "Network/Security-Group-Firewall",
      ],
    },
    {
      type: "category",
      label: "Marketplace",
      collapsed: false,
      items: [
        "Marketplace/Overview",
        "Marketplace/Launching-Apps",
      ],
    },
    {
      type: "category",
      label: "Monitoring",
      collapsed: false,
      items: [
        "Monitoring/introduction",
        "Monitoring/Dashboard-Overview",
        "Monitoring/Adding-Instance",
      ],
    },
    {
      type: "category",
      label: "Billing",
      collapsed: false,
      items: [
        "Billing/introduction",
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
        "Organization/introduction",
        "Organization/User-Profile",
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
    {
      type: "category",
      label: "Kubernetes",
      collapsed: false,
      items: [
        "Kubernetes/Introduction",
        "Kubernetes/Creatingcluster",
        "Kubernetes/Kubernetes-dashboard",
      ],
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
      label: "Container Apps",
      collapsed: false,
      items: [
        "marketplace-docs/container-service/DOCKER",
      ],
    },
    {
      type: "category",
      label: "Database Apps",
      collapsed: false,
      items: [
        "marketplace-docs/database/INFLUXDB",
        "marketplace-docs/database/MARIADB",
        "marketplace-docs/database/MONGODB",
        "marketplace-docs/database/MYSQL",
        "marketplace-docs/database/MYSQL-STANDALONE",
        "marketplace-docs/database/PHPMYADMIN",
        "marketplace-docs/database/POSTGRESQL",
        "marketplace-docs/database/RETHINKDB",
      ],
    },
    {
      type: "category",
      label: "Developer Apps",
      collapsed: false,
      items: [
        "marketplace-docs/developer-apps/ACTIVEMQ",
        "marketplace-docs/developer-apps/ANACONDA",
        "marketplace-docs/developer-apps/DJANGO",
        "marketplace-docs/developer-apps/GITLAB",
        "marketplace-docs/developer-apps/MINICONDA",
        "marketplace-docs/developer-apps/NODEJS",
        "marketplace-docs/developer-apps/RABBITMQ",
        "marketplace-docs/developer-apps/YARN",
      ],
    },
    {
      type: "category",
      label: "Hosting Apps",
      collapsed: false,
      items: [
        "marketplace-docs/hosting-apps/DRUPAL-LOMP",
        "marketplace-docs/hosting-apps/FILECLOUD",
        "marketplace-docs/hosting-apps/LAMP",
        "marketplace-docs/hosting-apps/LARAVEL",
        "marketplace-docs/hosting-apps/LEMP",
        "marketplace-docs/hosting-apps/JOOMLA-LAMP",
        "marketplace-docs/hosting-apps/JOOMLA-LOMP",
        "marketplace-docs/hosting-apps/MEDIAWIKI",
        "marketplace-docs/hosting-apps/OWNCLOUD",
        "marketplace-docs/hosting-apps/ROCKET-CHAT",
        "marketplace-docs/hosting-apps/WORDPRESS",
        "marketplace-docs/hosting-apps/WORDPRESS-WOOCOMMERCE",
      ],
    },
    {
      type: "category",
      label: "Hosting Panels",
      collapsed: false,
      items: [
        "marketplace-docs/hosting-panels/CLOUDPANEL",
        "marketplace-docs/hosting-panels/CPANEL",
        "marketplace-docs/hosting-panels/PLESK",
        "marketplace-docs/hosting-panels/WEBMIN",
      ],
    },
    {
      type: "category",
      label: "Media Apps",
      collapsed: false,
      items: [
        "marketplace-docs/media/ANTMEDIASERVER",
      ],
    },
    {
      type: "category",
      label: "Monitoring Apps",
      collapsed: false,
      items: [
        "marketplace-docs/monitoring/PROMETHEUS",
        "marketplace-docs/monitoring/ZABBIX",
      ],
    },
    {
      type: "category",
      label: "Operating System",
      collapsed: false,
      items: [
        "marketplace-docs/operating-system/UBUNTU-DESKTOP-20.04",
      ],
    },
    {
      type: "category",
      label: "Web Apps",
      collapsed: false,
      items: [
        "marketplace-docs/web-apps/NGINX",
        "marketplace-docs/web-apps/OPENLITESPEED",
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