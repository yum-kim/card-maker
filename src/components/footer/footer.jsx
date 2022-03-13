import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>yumi's project</p>
    </footer>
  );
});

export default Footer;
