import React from "react";
import Form from "@/app/components/utils/Form";
import styles from "./contact.module.css";
import seo_config from "@/_data/seo";

export const metadata = {
  title: seo_config.contact.title,
  description: seo_config.contact.description,
  keywords: seo_config.contact.keywords,
  author: seo_config.contact.author,
};

export default function page() {
  return (
    <section className={styles.contact_section}>
      <div className={styles.image_box}>
        <img src="/images/contact-page-photo.webp" alt="HVAC worker" />
        <h1>Contact us</h1>
        <h6>Get a quote now!</h6>
      </div>
      <div className={styles.form_section}>
        <Form />
      </div>
    </section>
  );
}
