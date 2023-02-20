---
title: IP-Manager
sidebar_label: IP-Manager
---
# IP Manager Overview on StackBill CMP

**A StackBill CMP IP address** is a **publicly-accessible** static IP address that you can assign to an **instance** and then **reassign** to **another Instance** later. To build a high-availability infrastructure, you can implement a failover mechanism using reserved IP addresses. 

# Acquiring new public IP address

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


