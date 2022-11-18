import React from 'react'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import BannerSec from './BannerSec'

const InfoSect = () => {
  return (
    <main >
      <section className={styles.infoSect}>
        <div>
          <h2 className={styles.title}>Designed for the future</h2>
          <Image 
            src="/illustration-editor-mobile.svg"
            width={400}
            height={300}
            alt="Editor graphic"
            className={styles.editorPic}
          />
        </div>

        <div>
          <h2 className={styles.heading}>Introducing an extensible editor</h2>
          <p className={styles.text}>
            Blog features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs; and allows easy manipulation of embeds such as images, videos, and Markdown.
            Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
          </p>
        </div>
        <div>
          <h2 className={styles.heading}>Robust content management</h2>
          <p className={styles.text}>
          Flexible content management enables users to easily move through posts.
          Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you&apos;re in full control.
          </p>
        </div>
      </section>
      
      <BannerSec />

      <section className={styles.infoSect}>
        <div>
          <Image 
            src="/illustration-laptop-mobile.svg"
            width={400}
            height={300}
            alt="Editor graphic"
            className={styles.editorPic}
          />
        </div>

        <div>
          <h2 className={styles.heading}>Free, open, simple</h2>
          <p className={styles.text}>
          Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy
          to learn.
          </p>
        </div>
        <div>
          <h2 className={styles.heading}>Powerful tooling</h2>
          <p className={styles.text}>
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
          </p>
        </div>
      </section>

    </main>
  )
}

export default InfoSect