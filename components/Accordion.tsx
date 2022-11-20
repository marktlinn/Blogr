import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import styles from '../styles/Accordion.module.css'

const AccordionComp = () => {
    const stopDefault = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('clicked item')
    }

    return (
        <Accordion >
          <Accordion.Item 
            onClick={(e)=>{stopDefault(e)}}
            eventKey="0"
            className={styles.accord}
          >
            <Accordion.Header >Product</Accordion.Header>
            <Accordion.Body>
                <ul className={styles.lists}>
                    <Link href="#">Overview</Link>
                    <Link href="#">Pricing</Link>
                    <Link href="#">Marketplace</Link>
                    <Link href="#">Features</Link>
                    <Link href="#">Integrations</Link>
                </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item 
            eventKey="1"
            onClick={(e)=>{stopDefault(e)}}
          >
            <Accordion.Header className={styles.title}>Company</Accordion.Header>
            <Accordion.Body>
                <ul className={styles.lists}>
                    <Link href="#">About</Link>
                    <Link href="#">Team</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Careers</Link>
                </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item 
            eventKey="2"
            onClick={(e)=>{stopDefault(e)}}
          >
            <Accordion.Header className={styles.title}>Connect</Accordion.Header>
            <Accordion.Body>
                <ul className={styles.lists}>
                    <Link href="#">Contact</Link>
                    <Link href="#">Newsletter</Link>
                    <Link href="#">LinkedIn</Link>
                </ul>
            </Accordion.Body>
          </Accordion.Item>

            <hr/>

            <div className={styles.btn_sect}>
                <button className={styles.btn_login}>Login</button>
                <button className={styles.btn_signup}>SignUp</button>
            </div>
        </Accordion>
      );
}

export default AccordionComp