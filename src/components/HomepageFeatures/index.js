import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import UserGuideSvg from "@site/static/img/user_guide.svg";
import PluginsSvg from "@site/static/img/plugins.svg";
import MarketPlaceSvg from "@site/static/img/marketplace.svg";

const FeatureList = [
  {
    title: "User Guide",
    Img: "/img/user_guide.svg",
    description: (
      <div style={{ textAlign: "justify" }}>
        The StackBill user guide is a highly comprehensive and informative
        document that offers detailed instructions and guidance to users on how
        to effectively use and manage StackBill CMP (Cloud Management Platform).
        It provides essential guidelines for performing key tasks such as
        creating an instance, adding networks, configuring a firewall, and much
        more.
      </div>
    ),
  },
  {
    title: "Plugins",
    Img: "/img/plugins.svg",
    description: (
      <div style={{ textAlign: "justify" }}>
        The StackBill CMP platform offers comprehensive documentation for all
        plugins, conveniently accessible through the Plugin section. In addition
        to its current live version featuring Kubernetes as a service, StackBill
        continues to introduce new plugins in upcoming releases, providing a
        constantly evolving and expanding set of capabilities. As a result,
        users can expect frequent updates and enhancements across various
        categories
      </div>
    ),
  },
  {
    title: "Market place",
    Img: "/img/marketplace.svg",
    description: (
      <div style={{ textAlign: "justify" }}>
        StackBill apps marketplace is a one-stop-shop for businesses looking to
        enhance their operations with powerful, industry-specific software. With
        a diverse range of apps, StackBill marketplace offers a seamless
        experience, with user-friendly search and filtering options, simple
        installation and integration processes, and robust support services to
        ensure users get the most out of their apps.
      </div>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Img} width="200px" height="auto" style={{ margin: "auto" }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
