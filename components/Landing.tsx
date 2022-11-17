import React from 'react'
import styles from '../styles/Landing.module.css'

const Landing = () => {
  return (
    <section className={styles.landing}>
      <h1>A modern publishing Platform</h1>
      <p>Grow your audience and speak to your people</p>
      <div className={styles.landing_btn_sec}>
        <button className='btn'>Start for Free</button>
        <button className='btn'>Learn More</button>
      </div>
    </section>
  )
}

export default Landing