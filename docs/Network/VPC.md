---
title: VPC
sidebar_label: VPC
---

# Virtual Private Cloud

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