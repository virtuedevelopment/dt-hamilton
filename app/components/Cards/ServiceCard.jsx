import React from "react";
import styles from "./cards.module.css";

export default function ServiceCard({ card }) {
  return (
    <div className={styles.service_card}>
      <img src={card.service_img} alt="Service image" />
      <big>{card.service_name}</big>
      <p>{card.service_desc}</p>
    </div>
  );
}
