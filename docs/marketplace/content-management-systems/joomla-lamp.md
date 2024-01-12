﻿---
title: Joomla Lamp
sidebar_label: Joomla Lamp
---

|**`Version 4.2.2` `OS Ubuntu 20.04` `CMS`**|  |
|-------------------------------------------|--|


### Description

Joomla! is a free open-source website development and content management (CMS) platform. It helps you build powerful dynamic websites and applications

### Software Included

Joomla - 4.2.2

Apache - 2.4.41

MySQL - 8.0.32

PHP - 8.2

Postfix - 3.4.13

Certbot - 0.40.0

phpMyAdmin - 5.2.0

### Getting started after deploying JOOMLA-LAMP

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 Sets the phpMyAdmin admin password.

 The phpMyAdmin configuration file is located at **/etc/phpmyadmin/**

 Sets the MySQL root password, runs mysql_secure_installation, and creates a Joomla user with the necessary permissions.

 Creates the initial Joomla configuration file and allows the Joomla instance to connect to the database.

 Modifies some of PHP’s settings to increase the maximum file size and execution time.

 Enables the Apache rewrite module so the Joomla permalink feature will work.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the JOOMLA-LAMP is deployed

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

 When you connect to your Joomla Instance via SSH for the 1st time, you’ll be displayed with the passwords and prompted to enter a domain name to complete the setup and secure your connection, you will need a registered domain configured for your Instance.
~~~
To cancel setup, press Ctrl+C.  This script will run again on your next login:
Enter the domain name for your new Joomla site:
(ex. example.org or test.example.org) do not include www or http/s:
Domain/Subdomain name: 
~~~

 Domain's A record must be pointed to the Instance's IPADDRESS.

Once the setup is completed without any issues, you will be able to access the domain name or Server's IPADDRESS in your browser to finish the Joomla installation through the web interface.

 The MySQL root password is stored under **/root/.mysql_root_password**

 Login to MySQL using the command,
 ~~~
 mysql -u root -p <$password stored in the above file>
 ~~~

 You can access phpMyAdmin immediately by visiting the Instance’s IP address in your browser followed by **/phpmyadmin**

 You will be prompted for the first login, which we have created for security purposes. 

 The user name is **"admin"**

 The Phpmyadmin password is stored under **/root/.phpmyadmin_password**

Joomla Database Informations are stored under **/root/.joomla_database_details**

 The web root is /var/www/html and the Joomla configuration file is **/var/www/html/configuration.php.**

### In addition, there are a few customized setup steps that we recommend you take

Creating an Apache virtual hosts file for each site maintains the default configuration as the fallback, as intended, and makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in **/var/www** for that domain’s content, and a new virtual host file in **/etc/apache2/sites-available** for that domain’s configuration

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the Joomla deployment to make securing the domain easier.

### To use Certbot, you’ll need a registered domain name and two DNS records

An A record from a domain (e.g., example.com) to the server’s IP address

An A record from a domain prefaced with www (e.g., www.example.com) to the server’s IP address

Additionally, if you’re using a virtual hosts file, you’ll need to make sure the server name directive in the VirtualHost block (e.g., ServerName example.com) is correctly set to the domain.

Once the DNS records and, optionally, the virtual host files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

~~~
certbot --apache -d example.com -d www.example.com
~~~

HTTPS traffic on port 443 needs to be allowed through the firewall. After you set up HTTPS, you can optionally deny HTTP traffic on port 80:

### Setting up Postfix

 Set a Valid Hostname using the command 
 ~~~
 hostnamectl set-hostname $HOSTNAME
 ~~~
 
 Replace **$HOSTNAME** with a valid hostname and make sure the hostname have a proper A record.

 The Instance IP must have a proper PTR record.

 Configure the hostname in the postfix configuration **/etc/postfix/main.cf**

In the section below section, replace the **$hostname** with the valid hostname
~~~
myhostname = $hostname
~~~

 Restart postfix using the command
~~~
systemctl restart postfix
~~~

 Once the above step is completed. You can check outgoing Emails usinf the command
~~~
echo "Postfix test" | mail -s "Subject" test@gmail.com
~~~

Initially, the Emails will be dropped into the SPAM folder. As this is a NEW IP the reputation is unknown. Once the reputation is calculated based on the incoming and outgoing emails. The emails will be dropped in the INBOX.
