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
      <div style={{ textAlign: "justify",paddingLeft:"10px" }}>
        The StackBill user guide is a very comprehensive and instructive guide that gives users full instructions and advice on how to use and manage StackBill CMP (Cloud Management Platform).
      </div>
    ),
  },
  {
    title: "Plugins",
    Img: "/img/plugins.svg",
    description: (
      <div style={{ textAlign: "justify" }}>
        The StackBill CMP platform offers comprehensive documentation for all
        plugins, conveniently accessible through the Plugin section.
      </div>
    ),
  },
  {
    title: "Market place",
    Img: "/img/marketplace.svg",
    description: (
      <div style={{ textAlign: "justify" }}>
        StackBill marketplace offers a seamless
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
