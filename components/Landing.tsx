import React from 'react'
import styles from '../styles/Landing.module.css'

const Landing = () => {
  return (
    <section className={styles.landing}>
      <h1 className={styles.heading}>A modern publishing Platform</h1>
      <p className={styles.pText}>Grow your audience and speak to your people</p>
      <div className={styles.landing_btn_sec}>
        <button className={styles.btnSignup}>Start for Free</button>
        <button className={styles.btnLearn}>Learn More</button>
      </div>
    </section>
  )
}

export default Landing