import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        Made with <Link href='./'>Metehan ATAKAN</Link>
    </footer>
  )
}

export default Footer