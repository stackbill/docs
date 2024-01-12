---
title: Kubernetes Dashboard in StackBill CMP
sidebar_label: Kubernetes Dashboard
---


# Kubernetes Dashboard

[Kubernetes](https://www.stackbill.com/stackbill-kubernetes.html) in [StackBill CMP is an open-source container-orchestration   ](https://youtu.be/nyV8oE3dfXs) system for automating deployment, scaling, and management of **containerized applications**. It has a large, rapidly growing ecosystem and the services, support, and tools are widely available. **Kubernetes** provides you with a framework to run distributed systems resiliently.

- Using [StackBill Cloud Management Portal](https://www.stackbill.com/index.html), You can quickly launch the **Kubernetes master**, worker nodes and get started working with your **Kubernetes cluster** in a minute.

- **Kubernetes Dashboard**   offers you various functionality such as Resource Monitoring, Resize, Auto scaling, Load balancer, etc..,

- The **K8S dashboard in StackBill CMP** will be helpful to users who are unfamiliar with Kubernetes.

## K8S Summary in StackBill CMP

- The first page of your **Kubernetes cluster** is the **Summary page.** 
- **Stackbill CMP** provides the overall view of your **Kubernetes cluster.**
- Detailed information about your **plan, Kubernetes version, cluster IP**, and more can be found on the **details page**

<img src="/img/kubernetes-dashboard/1Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

- It also displays number of nodes running in your **Kubernetes cluster environment.**

<img src="/img/kubernetes-dashboard/2Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

- You can also find the your **cluster and nodes resource** usage under **utilization section.**

<img src="/img/kubernetes-dashboard/3Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

- Summary page will also displays the total number of disks and network interfaces that are attached with cluster and nodes.

<img src="/img/kubernetes-dashboard/4Kubernetesdashboard-StackBillCloudManagementPortal.png" width="30%" />

- It also displays the detailed instruction to connect your Kubernetes cluster from the command line interface.

<img src="/img/kubernetes-dashboard/5Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

- Finally, we can find the instructions to access the **Kubernetes dashboard UI information.**

<img src="/img/kubernetes-dashboard/6Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

## Resources in K8S

- Resource tab contains two section. They are: **Node pools** & **Storage**

- Node pools will display the number of nodes and cluster(s) that are available in your **Kubernetes environment.**

<img src="/img/kubernetes-dashboard/7Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

- Storage section will display list of available disk in your cluster nodes. Also it will provide the option to attach a new data disk (or) resize your existing root disk for your cluster nodes.

<img src="/img/kubernetes-dashboard/8Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

## Networking

- **Kubernetes dashboard** will also provide you the detailed information about your cluster networking.

- This section contains four sub-categories, they are: **Network**, **Firewall**, **Port forwarding** & **Load Balancer**.

- Network category will show you the all available networking which are attached with your cluster and its nodes.

<img src="/img/kubernetes-dashboard/9Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

- Firewall tab will display list of ports which are opened for your cluster public IP. Also, you can add your custom ports that required for your applications.

<img src="/img/kubernetes-dashboard/10Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

- You can configure port forwarding to allow external traffic to reach your virtual machines (VMs) by forwarding specific ports to the VMs.

<img src="/img/kubernetes-dashboard/11Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

- A load balancer is a device or software that distributes network traffic across multiple servers or virtual machines (VMs) to ensure that no single machine is overloaded with traffic. You can use the built-in load balancing feature to distribute traffic to multiple VMs.

<img src="/img/kubernetes-dashboard/12Kubernetesdashboard-StackBillCloudManagementPortal.png" width="100%" />

### Marketplace

- Currently we are working towards **Kubernetes marketplace** apps for customer featured applications.

### Monitoring

- **Stackbill** working towards integrating stackwatch.io as official monitoring service for the virtual resource. Once the integration is completed, we will share more information on this.