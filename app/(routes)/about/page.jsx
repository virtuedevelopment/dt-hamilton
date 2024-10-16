import React from "react";
import styles from "./about.module.css";
import Link from "next/link";
import { Wrench, Headset, House, LeafyGreen } from "lucide-react";

export default function page() {
  return (
    <>
      <header className={styles.header}>
        <h1>About Us</h1>
        <h6>Your comfort is our priority</h6>
      </header>

      <section className={styles.bio}>
        <div className={styles.info}>
          <h2>What we offer</h2>
          <p>
            At DT Hamilton HVAC, we are dedicated to providing expert heating,
            ventilation, and air conditioning solutions for both residential and
            commercial spaces. Our team of skilled professionals offers a full
            range of services, ensuring your environment remains comfortable,
            energy-efficient, and reliable year-round.
            <br />
          </p>
          <Link href={"/"} className="button-main">
            Our Services
          </Link>
        </div>
        <div className={styles.image}>
          <img
            src="https://images.pexels.com/photos/14982942/pexels-photo-14982942/free-photo-of-trees-seen-from-roof-of-building.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Image of roof with A/C"
          />
        </div>
      </section>

      <section className={styles.features}>
        <span className={styles.card}>
          <Wrench />
          <p>Premium HVAC Solutions</p>
        </span>

        <span className={styles.card}>
          <Headset />
          <p>Exceptional Customer Support</p>
        </span>

        <span className={styles.card}>
          <House />
          <p>Commercial and Residential Services</p>
        </span>

        <span className={styles.card}>
          <LeafyGreen />
          <p>Eco-Friendly Solutions</p>
        </span>
      </section>
    </>
  );
}
