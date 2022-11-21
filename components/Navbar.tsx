import { useState } from 'react'
import Image from 'next/image'
import DropDown from './DropDown'
import styles from '../styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import AccordionComp from './Accordion'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = (e: any) =>{
    e.preventDefault();
    setMenuActive(prev=> !prev);
  }

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
      <div
        onClick={handleClick}
        >
        {menuActive === false ? (
        <FontAwesomeIcon 
        className={styles.faBars}
        icon={ faBars }/>) :
        (
          <FontAwesomeIcon 
          className={styles.faBars}
          icon={ faX }/>) 
      }
        {menuActive &&
        <div className={styles.menuCard}>
          <AccordionComp />
        </div> 
        }
      </div>
    </nav>
  )
}

export default Navbar