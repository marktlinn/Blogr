import React from 'react'
import Image from 'next/image'
import DropDown from './DropDown'
import styles from '../styles/Nav.module.css'

const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <Image 
          src="/logo.svg"
          width={65}
          height={30}
          alt="Blogr Logo"
          className="logo" 
        />
        <div className={styles.drop_menus}>
          <DropDown
            title='Connect' 
            itemTwo='Contact us' 
            itemThree='Join the Newsletter'
          />
          <DropDown 
            title='About Us' 
            itemTwo='Who We Are' 
            itemThree='FAQ'
          />
        </div>
      </div>

      <div className={styles.btn_sect}>
        <button className={styles.btn_login}>Login</button>
        <button className={styles.btn_signup}>SignUp</button>
      </div>
    </nav>
  )
}

export default Navbar