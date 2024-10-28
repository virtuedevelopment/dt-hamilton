import React from "react";
import seo_config from "@/_data/seo";
import styles from "./services.module.css";
import configurations from "@/_data/config";
import ServiceCard from "@/app/components/Cards/ServiceCard";

export const metadata = {
  title: seo_config.services.title,
  description: seo_config.services.description,
  keywords: seo_config.services.keywords,
  author: seo_config.services.author,
};

export default function page() {
  return (
    <>
      <header className={styles.header}>
        <h1>Our Services</h1>
        <h6>Learn more about how we can help you</h6>
      </header>

      <section className={styles.services}>
        {configurations.services.map((service, index) => (
          <ServiceCard key={index} card={service} />
        ))}
      </section>
    </>
  );
}
