import React from "react";
import styles from "./footer.module.css";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/assets/logo-white.svg" alt="logo" />

      <h2>DT HAMILTION MECHANICAL (OTTAWA) INC.</h2>

      <div className={styles.contacts}>
        <p>
          {" "}
          <Phone /> +1 613-293-5790
        </p>
        <p>
          {" "}
          <Mail /> service_dthamiltonmechanicalinc@yahoo.com
        </p>
      </div>

      <div className={styles.footer_info}>
        <p>DT HAMILTON MECHANICAL (OTTAWA) INC. 2024</p>

        <Link href={'/'}>Powered by Virtue</Link>
      </div>
    </footer>
  );
}
