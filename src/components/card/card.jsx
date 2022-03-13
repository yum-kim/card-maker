import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const { name, company, theme, title, email, message, fileURL } = card;
  const DEFAULT_URL = 'images/default_logo.png';
  const url = fileURL || DEFAULT_URL;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.company}>{company}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'light':
      return styles.light;
    case 'dark':
      return styles.dark;
    case 'colorful':
      return styles.colorful;
    default:
      new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
