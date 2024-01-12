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

**INTRODUCTION**

VPC (Virtual Private Cloud) is a networking feature in cloud control panel, that enables users to create isolated and logically defined private cloud environments within a public cloud infrastructure. VPC allows users to have complete control over their network topology and allows them to set up a private network space with multiple tiers of VMs, routers, firewalls, and load balancers.

**FEATURES OF VPC**

 -  Isolated Network Environment: VPC allows users to create an isolated network environment with its own private IP address space. This isolation provides enhanced security and separation from other VPCs and the public cloud.
    
 -  Multiple Tiers: Within a VPC, users can create multiple tiers or subnets to organize their network infrastructure efficiently. Each tier can have its own set of VMs and network services, such as routers, load balancers, and firewalls.
    
 -  Virtual Router: VPC uses a virtual router to provide essential routing capabilities between different tiers within the VPC and also between the VPC and the external network (public cloud or the internet). The virtual router handles network traffic and ensures that packets are correctly forwarded to their destination.
    
 -  Network ACLs and Security Groups: VPC allows users to define Network ACLs (Access Control Lists) and Security Groups to control inbound and outbound network traffic to and from the VMs in the VPC. This helps in enhancing security and access control for the VPC resources.
    
 -  VPN Connectivity: VPC supports the creation of VPN (Virtual Private Network) connections, which allows users to establish secure communication between their on-premises infrastructure and the VPC in the public cloud. This feature enables hybrid cloud scenarios and facilitates secure data transfer.
    
 -  Load Balancing: Users can set up load balancers within the VPC to distribute incoming traffic across multiple VMs in a tier. This ensures high availability and scalability for applications running within the VPC.
    
 -  Network Offering: VPC offers multiple network offerings that define the specifications and capabilities of the VPC, such as the number of subnets, IP address ranges, and supported services. Users can select the appropriate network offering based on their requirements.
    
 -  Elastic IP Addresses: VPC provides Elastic IP addresses (EIPs) that can be associated with VMs to allow them to have a static and public-facing IP address. This allows VMs to be accessible from the internet without changing their IP addresses.

**STEPS TO CREATE VIRTUAL PRIVATE CLOUD**

 - Login into your  control panel.
 - Go to Network and click on VPC.
 
 <img src="/img/vpc/Image-1.JPG" width="50%" />
 
 - Then click on Add VPC.

<img src="/img/vpc/Image-2.JPG" width="100%" />

 - Provide name, description,  and specify the IP address range for the VPC in CIDR notation (e.g., 10.0.0.0/16). This range should not overlap with other networks in your stackbill environment. Also, Choose the appropriate VPC offering that defines the specifications and capabilities of the VPC. Then click on Add button.
<img src="/img/vpc/Image-3.JPG" width="100%" />

 - VPC created successfully.

<img src="/img/vpc/Image-4.JPG" width="100%" />

**ADDING YOUR VPC TIER NETWORK**

 - After creating your VPC network, click on configure button.

<img src="/img/vpc/Image-5.JPG" width="100%" />

 - Then click on create network.

<img src="/img/vpc/Image-6.JPG" width="100%" />

 - Specify the name for your tier (e.g., "DMZ," "App," etc.)
 - Select the appropriate ACL to allow (or) deny of your network access.
 - Then provide the gateway, network mask and select the network offering for your tier and click on Add button.

<img src="/img/vpc/Image-7.JPG" width="90%" />

 - your new tier network has been created successfully.

<img src="/img/vpc/Image-8.JPG" width="90%" />

**ADDING VIRTUAL MACHINES**

 - To create new virtual machine, click on the virtual machines link.
 - Then click on Add instance.
 - **[Steps to create intsance](/docs/virtualresources/Instance#quick-deploy-in-stackbill-cmp)**

<img src="/img/vpc/Image-10.JPG" width="100%" />

 - while creating the VM, make sure that you have selected your VPC tier under network list.

<img src="/img/vpc/Image-11.JPG" width="100%" />

** VPC to VPC VPN configuration in stackbill **

 - To explain the VPC to VPC VPN, please check the below image for demonstration purpose.

<img src="/img/vpc/vpc-cloudmanagementportal.jpg" width="80%" />

**VPN gateway** - The VPN gateway is the term used for the local VPN endpoint. This is simply enabled on the source-NAT IP address of the VPC virtual router – and it allows the local VR to accept incoming VPN connections.

**VPN customer gateway** - The VPN customer gateway is the remote endpoint we target when we configure the VPN connection. When we configure these we need to specify all the details for this VPN connection.
-   Name: user friendly name for the gateway
-   Gateway: the public facing IP address of the remote VPC virtual router.
-   CIDR list: this is a list of CIDR networks which are reachable at the remote end of the tunnel. Multiple CIDR ranges can be specified, separated my commas.
-   IPsec pre-shared key: this is effectively the VPN passphrase used when the VPN connection is negotiated – and it should therefore follow standard password best practices in a production environment.
-   IKE / ESP encryption details for the VPN tunnels.

**VPN connection**

The VPN connection is the pairing from the source – or local – VPN gateway to the remove VPN customer gateway. This is configured in one of two modes:

-   Active: the connection which initiates the VPN tunnel, typically from the VPC hosting VMs which consumes resources on the remote VPC.
-   Passive: this connection waits for the opposite VPC VR to initiate the connection, and is typically on the VPC hosting the resources to be consumed.

Please note for both of these connections the resources either end must be reachable over the CIDR list configured for the VPN customer gateway.

**STEPS TO CREATE VPN GATEWAY**

- Login into the cloud control panel.
- Then click on network and select VPN Gateway.

<img src="/img/vpc/Image-13.JPG" width="40%" />

- Then click on ADD VPN button.

<img src="/img/vpc/Image-14.JPG" width="80%" />

- In this example we assume that VMs on both VPC1 tier 1 and 2 will consume resources on VPC2. Please note in this case we only configure the name, public gateway, CIDR list and the IPsec preshared key, all other fields are left as defaults.

<img src="/img/vpc/Image-15.JPG" width="80%" />

- Repeat this step for the customer gateway on VPC2:

<img src="/img/vpc/Image-16.JPG" width="80%" />

**Enable Site-to-Site VPN**

- Login into your cloud control panel.
- Then click on VPC menu.
- Then click on the corresponding VPC from the list.
- Then click on configure.
- Click on Site to Site VPN list menu.

<img src="/img/vpc/Image-17.JPG" width="80%" />

- Click OK to confirm the creation.

<img src="/img/vpc/Image-18.JPG" width="80%" />

- Once the Site to site VPN enabled, then click on the VPN connection tab. Click on Add button.

<img src="/img/vpc/Image-19.JPG" width="80%" />

- Then select the VPN gateway from the drop-down list and click on OK.

<img src="/img/vpc/Image-20.JPG" width="80%" />

- Repeat this step for the passive connection from VPC2 to VPC1, but for this one tick the “passive” tick box.

- Once both VPN connection have been configured refresh the screen and ensure the VPN connection state is “connected”.
- If the VPN connection doesn’t come up automatically simply go back to the active connection (from VPC1 to VPC2) and click the “Reset" button.

<img src="/img/vpc/Image-21.JPG" width="80%" />

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
