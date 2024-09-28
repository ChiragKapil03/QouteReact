import React from "react";
import styles from "./Card.module.css";

const Card = ({ quote, author }) => {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>"{quote}"</p>
      <p className={styles.author}>- {author}</p>
    </div>
  );
};

export default Card;
