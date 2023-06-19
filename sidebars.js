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
      label: "Business Apps",
      collapsed: false,
      items: [
        "marketplace/business-apps/filecloud",
        "marketplace/business-apps/owncloud",
        "marketplace/business-apps/rocket-chat",
      ],
    },
    {
      type: "category",
      label: "Content Management Systems",
      collapsed: false,
      items: [
        "marketplace/content-management-systems/drupal-lomp",
        "marketplace/content-management-systems/joomla-lamp",
        "marketplace/content-management-systems/joomla-lomp",
        "marketplace/content-management-systems/laravel-lemp",
        "marketplace/content-management-systems/mediawiki",
        "marketplace/content-management-systems/wordpress-lamp",
      ],
    },
    {
      type: "category",
      label: "Databases",
      collapsed: false,
      items: [
        "marketplace/databases/influxdb",
        "marketplace/databases/mariadb",
        "marketplace/databases/mongodb",
        "marketplace/databases/mysql",
        "marketplace/databases/mysql-lamp",
        "marketplace/databases/opensearch",
        "marketplace/databases/phpmyadmin",
        "marketplace/databases/postgresql",
        "marketplace/databases/rethinkdb",
      ],
    },
    {
      type: "category",
      label: "Developer Tools",
      collapsed: false,
      items: [
        "marketplace/developer-tools/activemq",
        "marketplace/developer-tools/anaconda",
        "marketplace/developer-tools/docker",
        "marketplace/developer-tools/gitlab",
        "marketplace/developer-tools/miniconda",
        "marketplace/developer-tools/rabbitmq",
      ],
    },
    {
      type: "category",
      label: "eCommerce",
      collapsed: false,
      items: [
        "marketplace/ecommerce/magento2", 
        "marketplace/ecommerce/wordpress-woocommerce",
      ],
    },
    {
      type: "category",
      label: "Frameworks",
      collapsed: false,
      items: [
        "marketplace/frameworks/django",
        "marketplace/frameworks/lamp",
        "marketplace/frameworks/lemp",
        "marketplace/frameworks/nginx",
        "marketplace/frameworks/nodejs",
        "marketplace/frameworks/openlitespeed",
        "marketplace/frameworks/yarn",
      ],
    },
    {
      type: "category",
      label: "Hosting Panels",
      collapsed: false,
      items: [
        "marketplace/hosting-panels/cloudpanel",
        "marketplace/hosting-panels/cpanel",
        "marketplace/hosting-panels/plesk",
        "marketplace/hosting-panels/webmin",
      ],
    },
    {
      type: "category",
      label: "Media",
      collapsed: false,
      items: [
        "marketplace/media/antmediaserver",
      ],
    },
    {
      type: "category",
      label: "Monitoring",
      collapsed: false,
      items: [
        "marketplace/monitoring/prometheus",
        "marketplace/monitoring/zabbix",
      ],
    },
    {
      type: "category",
      label: "Operating System",
      collapsed: false,
      items: [
        "marketplace/operating-system/ubuntu-desktop-20-04",
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