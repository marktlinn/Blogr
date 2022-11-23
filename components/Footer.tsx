import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      <div className={styles.profileTags}>
        <p>Made by Mark Linn</p>
        <Link href="https://github.com/marksist300" ><FontAwesomeIcon size="2x" icon={faGithub}/></Link>
        <Link href="https://twitter.com/marksist_300"><FontAwesomeIcon size="2x" icon={faTwitter} /></Link>
        <Link href="mailto:marklinndev@gmail.com"><FontAwesomeIcon size="2x" icon={faEnvelope} /></Link>
      </div>
      </footer>
  )
}

export default Footer