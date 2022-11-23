import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>Blogr</h3>
      <div className={styles.footerColumn}>
        <h4 className={styles.subTitle}>Product</h4>
        <ul className={styles.linkList}>
          <Link href="#">Overview</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Marketplace</Link>
          <Link href="#">Features</Link>
          <Link href="#">Integrations</Link>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h4 className={styles.subTitle}>Company</h4>
        <ul className={styles.linkList}>
          <Link href="#">About</Link>
          <Link href="#">Team</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Careers</Link>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h4 className={styles.subTitle}>Connect</h4>
        <ul className={styles.linkList}>
          <Link href="#">Contact</Link>
          <Link href="#">Newsletter</Link>
          <Link href="#">LinkedIn</Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer