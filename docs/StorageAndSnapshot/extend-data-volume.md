---
title: Extend the Data Volume 
sidebar_label: Extend the Data Volume 
---

### In this tutorial, we'll show you how to extend **Windows VM's data volume.**


-   Let's assume that you have already created a VM and volume has been attached to your windows instance.

<img src="/img/Extendvolume/1ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="70%" />

:::info
Note: Make sure that you virtual instance should be in **stopped state** before performing the below operation.
:::

- Also, For ex, you have resize your data disk by adding additional **10 GB through StackBill portal.**

<img src="/img/Extendvolume/2ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="90%" />

<img src="/img/Extendvolume/3ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="90%" />

- Start your virtual machine.

- Once you logged into your virtual machine, Open run window and type **diskmgmt.msc**

<img src="/img/Extendvolume/4ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="80%" />

- You are able to see the **additional disk space as an unallocated state.**

<img src="/img/Extendvolume/5ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="90%" />

- Right click on the data disk and click on **extend volume.**

<img src="/img/Extendvolume/6ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="90%" />

-  A new wizard will be open and click **Next** to continue.

<img src="/img/Extendvolume/7ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="70%" />

- Specify the amount of space that you willing to expand and click **Next** button.

<img src="/img/Extendvolume/8ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="80%" />

- Click **finish** to complete the wizard.

<img src="/img/Extendvolume/9ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="80%" />

- Now you can able to see your data volume with new disk size.

<img src="/img/Extendvolume/10ExtendDataVolume-StackBillCloudManagementPortalApacheCloudStack.png" width="90%" />
