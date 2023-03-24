---
title: Basic Network
sidebar_label: Basic Network
---

## Network Manager in StackBill CMP

[**StackBill**](https://www.stackbill.com/) provides private networking, traffic filtering, and load balancing so you can secure and control your application traffic.


<img src="/img/network/network-stackbillcloudmanagementportal.png" width="60%" />

[**StackBill**](https://www.stackbill.com/) provides private networking, traffic filtering, and load balancing so you can secure and control your application traffic.

- There are two types of network available in **StackBill CMP** they are **L2 network**, and **Isolated network**.

### L2 Network on Stackbill Cloud Management portal.

- Click on the **Network** dropdown button below the virtual resources icon, Which is available in the top left corner. from the dropdown, Click on **Basic Network**, to create a new network.

<img src="/img/network/1l2network-stackbillcloudmanagementportal.png" width="80%" />

- **Basic Network** screen appears.
- At the right side of the panel the user can able to see a option called **ADD NETWORK**, Click on it.

<img src="/img/network/2l2network-stackbillcloudmanagementportal.png" width="80%" />

- So once You click on the Add network button select the required network type as per the need.

:::info
  **The following document shows the flow of the L2 network.**
:::

<img src="/img/network/3l2network-stackbillcloudmanagementportal.png" width="80%" />

- **Name** - Specify a **name** for the network.

- **Network offering** - Select the **Network offering**.
- **Attach Network to Instance** - The user can **attach the network** to their **required instance** using this option. 
- Finally,Click on the **Create** button.

<img src="/img/network/4l2network-stackbillcloudmanagementportal.png" width="80%" />

-   Now the **L2  Network**  has been created successfully.

###  Creating Isolated Network in StackBill CMP

**An isolated network** can be accessed only by virtual machines of a single account.

- Click on the **Network** dropdown button below the virtual resources icon, Which is available in the top left corner. from the dropdown, Click on **Basic Network**, to create a new network.

<img src="/img/network/1l2network-stackbillcloudmanagementportal.png" width="90%" />

- **Basic Network** screen appears.
- At the right side of the panel the user can able to see a option called **ADD NETWORK**, Click on it.

<img src="/img/network/1basicnetwork-stackbillcloudmanagementportal.png" width="100%" />

- Once You click on the **Add network** button select **isolated network** option to create a **isolated network.**

:::info
  **The following document shows the flow of the Isolated network.**
:::

<img src="/img/network/3l2network-stackbillcloudmanagementportal.png" width="70%" />

- **Name** - Specify a **name** for the network.

- **Network offering** - Select the **Network offering**.
- **Attach Network to Instance** - The user can **attach the network** to their **required instance** using this option. 
- Finally,Click on the **Create** button.

<img src="/img/network/4l2network-stackbillcloudmanagementportal.png" width="90%" />

:::success
-   Now the **Isolated  Network**  has been created successfully.
:::



## Adding Network to Instance in StackBill CMP

<img src="/img/virtualresources/Instancecreation-StackBillCloudManagementPortal1.png" width="80%" />

-   Click on the  **Virtual Resources**  dropdown button below the dashboard icon, Which is available in the top left corner. from the dropdown, Click on  **Instance** option.

<img src="/img/network/1add-networktoinstance-stackbillcloudmanagementportal.png" width="90%" />

- Instance screen appears.
- Click  on the particular instance.

<img src="/img/network/2add-networktoinstance-stackbillcloudmanagementportal.png" width="90%" />

- Now the summary page of the instance appears, Select the **Network & Firewall** option on the summary.
- Network & Firewall option appears.
- At right side of the panel click on **Add network to the VM button**.

<img src="/img/network/3add-networktoinstance-stackbillcloudmanagementportal.png" width="50%" />

- Select the Network and click **Add** button.


**IMG**

- Now the the VM has been attached to network successfully.

## Adding security groups in StackBill CMP

<img src="/img/securitygroups/1securitygroups-stackbillcloudmanagementportal.png" width="100%" />

-   Click on the  **Network**  dropdown button below the compute icon, Which is available in the top left corner. from the dropdown, Click on  **Security groups**  option.

<img src="/img/securitygroups/2securitygroups-stackbillcloudmanagementportal.png" width="100%" />

- **Security group** option appears on the screen.
- At right side of the panel the user can able to see a option called **Add** , Click on it to **create a new security groups.**

<img src="/img/securitygroups/3securitygroups-stackbillcloudmanagementportal.png" width="80%" />

- **Name** - Specify a **name** for the security group that has been creating.
-  **Description** - Give a short notes about the security group.
- **Status** - Specify IP version.
- Finally, Click on **Add** button.

<img src="/img/securitygroups/4securitygroups-stackbillcloudmanagementportal.png" width="100%" />

:::success
**- Now the security group has been created successfully.**
:::

### What is mean by Network Address Translation?

- **NAT**  stands for **Network Address Translation** 

- It will translates set of IP address to another set of ip address

- In other words, As per wikipedia, it expains " **Network address translation is a method of mapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device**"

-  In **StackBill CMP**, there are two types of NAT is available. They are: **Source NAT** & **Static NAT**

- **Source NAT** - It will be used as shared NAT, in other words, using this source NAT IP, we can able to access multiple virtual machines.

- **Static NAT** - It will be the dedicated NAT. In other words, this NAT IP will be attached to only a single virtual machine. It's like one-to-one communication.

## Configure Port forwarding

- **Port forwarding** allows computer over the internet to connect a specific computer (or) service within a private network.

- A port number will have an IP address and based on the port number to determine what the purpose is.

-   click on the **Network** dropdown below the virtual Resources icon, which is available in the top left corner. From the dropdown, click on **Basic Network**, **to Configure Port Forwarding**

<img src="/img/securitygroups/PortForwarding1- StackBillCloudManagementPortal.png" width="60%" />

- **Basic Network**Screen appears.
- Click on the **network** in which you wish to configure port forwarding.

<img src="/img/securitygroups/PortForwarding2- StackBillCloudManagementPortal.png" width="100%" />

- Network details screen appears, Select the **public IP** section from the details screen.

<img src="/img/securitygroups/PortForwarding3- StackBillCloudManagementPortal (1).png" width="100%" />

- Click on the **Source NAT** option 

<img src="/img/securitygroups/PortForwarding4- StackBillCloudManagementPortal.png" width="100%" />

- IP address screen open.
- Before configuring Port Forwarding user need to Configure Firewall
- To Configure the Firewall, click on **Firewall** option and configure it.

<img src="/img/securitygroups/PortForwarding5- StackBillCloudManagementPortal.png" width="100%" />

- Once the firewall has been configured go to the **Port Forwarding** option.
- Click on **Add VM**.

<img src="/img/securitygroups/PortForwarding6- StackBillCloudManagementPortal.png" width="100%" />

- Configure the required port and select the protocol
- Finally Click on **Add VM & Configure**.

<img src="/img/securitygroups/PortForwarding7- StackBillCloudManagementPortal.png" width="100%" />

- Now the Port Forwarding has been configured successfully.


## Creating Egress rule on StackBill CMP

- **Egress rule** will be used to allow your virtual instance to access outside network i.e. **Internet**.

<img src="/img/securitygroups/1egressrule-stackbillcloudmanagementportal.png" width="100%" />

- Click on the particular **security group in which the egress rule should be created**.

<img src="/img/securitygroups/2egressrule-stackbillcloudmanagementportal.png" width="100%" />


- **Now egress rule creating menu appears.**
- The user can see an option called **Add rule** on the right side of the panel.
- Click on it.

<img src="/img/securitygroups/4egressrule-stackbillcloudmanagementportal.png" width="80%" />

- Select the **protocol** as per the wish.
- Specify the **start and end port number.**
- Finally, Click on **Add rule** button.

<img src="/img/securitygroups/5egressrule-stackbillcloudmanagementportal.png" width="100%" />

:::success
- Now the Egress rule has been created successfully.
:::

## IP Manager Overview on StackBill CMP

**A StackBill CMP IP address** is a **publicly-accessible** static IP address that you can assign to an **instance** and then **reassign** to **another Instance** later. To build a high-availability infrastructure, you can implement a failover mechanism using reserved IP addresses. 

## Acquiring new public IP address

<img src="/img/IP-manager/1ipmanager-stackbillcloudmanagementportal.png" width="100%" />


- Click on the **Network** dropdown button below the compute icon, Which is available in the top left corner. from the dropdown, Click on **Ip Manager** option.

<img src="/img/IP-manager/2ipmanager-stackbillcloudmanagementportal.png" width="100%" />

- **IP manager** screen appears.
- Click on **Acquire New Public IP** option.

<img src="/img/IP-manager/3ipmanager-stackbillcloudmanagementportal.png" width="70%" />

- **Choose your Network** - To acquire a public IP address, choose the network. 

:::note
**The loadbalancer and port forwarding features can be enabled by disabling static NAT while acquiring a new public IP address.**
::: 

<img src="/img/IP-manager/4ipmanager-stackbillcloudmanagementportal.png" width="70%" />

:::note
**The loadbalancer and port forwarding features can be disabled by enabling static NAT while acquiring a new public IP address.**
::: 

- To confirm the acquisition of the new IP address, click on the check box.

:::note
**- The price is charged by the administrator to acquire a new IP address**
:::

- Finally click on the **Acquire** button.

<img src="/img/IP-manager/5ipmanager-stackbillcloudmanagementportal.png" width="100%" />

- Now the **IP adress** has been created successfully.

## Releasing public IP address

<img src="/img/IP-manager/1releaseipmanager-stackbillcloudmanagement.png" width="100%" />

- To Release a Public IP, click on the **release icon** which is available on the **Action menu.**
- You will get a confirmation notification on the portal once you click on it.

<img src="/img/IP-manager/2releaseipmanager-stackbillcloudmanagement.png" width="80%" />

- To release the IP address, click OK.

<img src="/img/IP-manager/3releaseipmanager-stackbillcloudmanagement.png" width="100%" />

- Now your **IP** has **removed** successfully.

## Virtual Private Cloud

- A **Virtual Private Cloud (VPC)** is a private network interface for collections of **StackBill** resources. 

- Because **VPC networks** are inaccessible from the **public internet** and other **VPC networks**, they provide a more secure connection between resources.

- Traffic within a **VPC network** doesn’t count against bandwidth usage.

## VPC Overview on StackBill CMP


- **StackBill Virtual Private Cloud** is a private, isolated part of **StackBill**. 
- **VPCs** can have their **own virtual network** topology that resembles traditional physical networks. 
- In the **virtual network**, you can launch VMs that have **private addresses** in the range of your choice.
- **VPC** enables you to **group similar kinds of instances** **according to IP address** ranges by defining network tiers within the network range.


## VPC (Virtual Private Cloud) in StackBill CMP

<img src="/img/VPC/1vpc-stackbillcloudmanagementportal.png" width="100%" />

- Click on the **Network** dropdown button below the compute icon, Which is available in the top left corner. from the dropdown, Click on **VPC** option.

<img src="/img/VPC/2vpc-stackbillcloudmanagementportal.png" width="100%" />

- **VPC** option appears on the screen.
- At right side of the panel the user can able to see a option called **ADD VPC**, Click on it.

<img src="/img/VPC/3vpc-stackbillcloudmanagementportal.png" width="100%" />

-  **Name** -  Provide a name for the VPC you are creating.
-   **Super CIDR** - Defines the CIDR range for all the tiers (guest networks) within a VPC. When you create a tier, ensure that its CIDR is within the Super CIDR value you enter.
-  **VPC offering** -  Choose a VPC offering.
-   **Description** - Give a short description regarding the vpc creation.
-   **DNS Domain** - **DNS Domain for Guest Network**  - If you want to assign a special domain name, specify the DNS suffix. This parameter is applied to all the tiers within the VPC. That implies, all the tiers you create in the VPC belong to the same DNS domain. If the parameter is not specified, a DNS domain name is generated automatically.
-   Click on  **Add**  button.

:::success
**- Now your VPC has been created Successfully.**
:::

## Overview of Load Balancer in Stackbill Cloud Management Portal.

A **load balancer** can be deployed as **software or hardware** to a device that **distributes connections** from clients between a set of servers. A load balancer acts as a ‘**reverse-proxy**’ to represent the application servers to the client through a virtual IP address (VIP). This technology is known as **server load balancing (SLB)**. SLB is designed for pools of application servers within a single site or local area network (LAN).


<img src="/img/loadbalancer/Loadbalancer-StackBillCloudManagamentPortal.png" width="50%" />


### Add a load balancer to an instance in StackBill Cloud Management Portal.


-   Click on the  **Network**  dropdown button below the **Compute icon**, Which is available in the top left corner. from the dropdown, Click on  **Load Balancer**, to create a new Load Balancer.
- **Load balancer** screen appears.

<img src="/img/loadbalancer/1Loadbalancer-StackBillCloudManagementPortal.png" width="90%" />


- On the right side of the panel you can see a option called **Create Load Balancer** option, Click on it.

<img src="/img/loadbalancer/2Loadbalancer-StackBillCloudManagementPortal.png" width="90%" />

- **Add Load Balancer** option appears on the screen.


<img src="/img/loadbalancer/3Loadbalancer-StackBillCloudManagementPortal.png" width="90%" />

- As a first step enter a **name and description** for the load balancer that you create.


<img src="/img/loadbalancer/4Loadbalancer-StackBillCloudManagementPortal.png" width="90%" />

**Network & IP Address**
-  Here you select the network and IP address for the Load Balancer.
- **Create Forwarding Policy & Algorithm**
- **Policy name** - Give a Policy name.
- Select the protocol and assign a Port number for both load balancer and instance. 

<img src="/img/loadbalancer/5Loadbalancer-StackBillCloudManagementPortal.png" width="90%" />

**Choose Algorithm and Sticky Sessions**
- Choose your Load Balancer algorithm for the traffic distribution.
- Select the sticky session as per the requirement.

<img src="/img/loadbalancer/6Loadbalancer-StackBillCloudManagementPortal.png" width="90%" />

**Attach Instance**

- Attach the policy to the required instance and click **Save policy** button in the below.

<img src="/img/loadbalancer/7Loadbalancer-StackBillCloudManagementPortal.png" width="90%" />

- Now the **Load balancer Policy** has been created successfully.
- Once the policy has been created successfully click on **Create Load Balancer** button which available on the below.

<img src="/img/loadbalancer/8Loadbalancer-StackBillCloudManagementPortal.png" width="90%" />

- The **load balancer has been successfully configured on the instance.**
- It is now possible to view the created policy on the Loadbalancer dashboard.


-----------------------------------------------------

**About StackBill**

**[StackBill](https://www.youtube.com/watch?v=nyV8oE3dfXs) is a complete self-service intuitive [Cloud Management Portal](https://www.stackbill.com/) with extensive features leveraging Apache CloudStack® with state of art years of expertise.**
