import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Forest Heims | Contact Info</title>
        <meta name="description" content="Forest Heims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <header className={styles.header}>
      <div className={styles.description}>
          <p>
          Forest Heims | Contact Info
          </p>
        </div>
      {/* <div className={styles.links}>
        <h2 className={styles.headingLink}>
          <a href="https://forestheims.net/" className={styles.link} referrerPolicy="origin" >
            Home
          </a>
        </h2>
        <h2 className={styles.headingLink}>
          <a href="https://forestheims.dev/" className={styles.link} referrerPolicy="origin" >
            Blog
          </a>
        </h2>
        <h2 className={styles.headingLink}>
          <a href="https://forestheims.org/" className={styles.link} referrerPolicy="origin" >
            Projects
          </a>
        </h2>
        <h2 className={styles.headingLink}>
          <a href="./" className={styles.link}>
            Contact
          </a>
        </h2>
        </div> */}
         <p className={styles.headerSlug}>Particular interests of mine include bioinformatics, psychology, 3D engineering, audio engineering, audio visualization, game development, Linux, cybersecurity, computational chemistry/biology, genetic algorithms, drug discovery, organic chemistry, psychopharmacology, psychonautics, and open source software and education.</p>
            <p className={styles.headerSlug}>I come from an academic background of chemistry, philosophy, and art. Education will always be a value I hold, and I also love to teach and continuously learn.</p>
            <p className={styles.headerSlug}>Some of my hobbies include hiking, juggling, surfing the web, rollerskating, and printmaking. Essential Oil and Hydrosol distillation is a process I am also fond of practicing and learning about.</p>
          
      </header>
      <main className={styles.main}>
        <div className={styles.center}>
        <div className={styles.logo}>
          <img src="/foxy.gif"
            alt="cute animated fox face gif" width={220} />
        </div>
        </div>
        <div className={styles.projects}>

          <h2>
            <a href='https://synethsizer.com' className={styles.link}>
            Synethsizer.com
            </a>
            </h2>
            <p>A personal project I&apos;ve been working on for fun and to keep coding and trying out some of the newest libraries and frameworks. This is set up as a template repo for anyone interested in diving into Three.js without much dev ops hassle.</p>
          <iframe src="https://synethsizer.com" className={styles.iframe}></iframe>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/forestheims/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.thirteen}>
              <h2 className={inter.className}>
                LinkedIn <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Connect with or contact me here.
              </p>
            </div>
          </a>

          <a
            href="https://github.com/forestheims"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.thirteen}>
              <h2 className={inter.className}>
                GitHub <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                forestheims has 136 repositories available.
              </p>
            </div>
          </a>
          <a
            href="https://forestheims.net/resume/2023-resume-2.3.pdf"
            className={styles.card}
            target="_blank"
          >
            <div className={styles.thirteen}>
              <h2 className={inter.className}>
                Resume <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                My resume tailored to software developer.
              </p>
            </div>
          </a>
          <a
            href="mailto:forestheims@gmail.com"
            className={styles.card}
            target="_blank"
          >
            <div className={styles.thirteen}>
              <h2 className={inter.className}>
                Email <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Email is the best way to get ahold of me.
              </p>
            </div>
          </a>

        </div>
      </main>
      <footer className={styles.footer}>
       </footer>
    </>
  )
}