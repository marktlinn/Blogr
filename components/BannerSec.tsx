import React from 'react'
import styles from '../styles/Banner.module.css'
import Image from 'next/image'

const BannerSec = () => {
  return (
    <section className={styles.container}>
      <Image 
        alt="graphic of app running on mobile"
        src="/illustration-phones.svg"
        width={400}
        height={400}
        className={styles.phones}
      />
      <div className={styles.text}>
        <h2 className={styles.title}>State of the Art Infrastructure</h2>
        <p className={styles.underText}>
        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
      </div>
    </section>
  )
}

export default BannerSec