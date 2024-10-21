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
          <h2>What We Do</h2>
          <p>
            At DT Hamilton HVAC, we are committed to delivering top-tier
            heating, ventilation, and air conditioning solutions tailored to
            meet the unique needs of both residential and commercial spaces.
            Whether you are a homeowner seeking cozy warmth during winter or a
            business owner needing efficient cooling for a bustling office, our
            comprehensive range of services ensures that your space stays
            comfortable and functional in every season.
            <br />
            <br />
            Our team of skilled professionals brings extensive expertise,
            performing everything from routine maintenance and emergency repairs
            to complete system installations and upgrades. We work with
            cutting-edge technologies and high-efficiency systems designed to
            improve air quality, lower energy consumption, and enhance
            operational reliability.
            <br />
            <br />
            We understand that every environment has distinct demands, so we
            take a customized approach to each project, ensuring all
            installations and repairs are optimized for maximum performance. At
            DT Hamilton HVAC, client satisfaction is our top priority, and we
            pride ourselves on delivering exceptional service and dependable
            solutions that exceed expectations.
            <br />
            <br />
            Whether you need seasonal maintenance, ductwork design,
            construction, or a new HVAC installation, our expert team is ready
            to ensure your system runs smoothly and cost-effectively year-round.
            Let us partner with you to create a comfortable, energy-efficient
            space that you can rely on.
          </p>
          <Link href={"/services"} className="button-main">
            Our Services
          </Link>
        </div>
        <div className={styles.image}>
          <img src="/images/about-img-02.jpeg" alt="Image of roof with A/C" />
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

      <section className={styles.call_to_action}>
        <p>
          Ready to elevate your comfort? Contact DT Hamilton HVAC today for
          expert solutions that keep your space efficient, reliable, and
          comfortable all year round. Whether it&apos;s maintenance, repairs, or
          a brand-new installation, our team is here to help. Book your
          consultation now and experience the difference!
        </p>
        <Link href={"/#quote-section"} className="button-white">
          Get Quote
        </Link>
      </section>
    </>
  );
}
