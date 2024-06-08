import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Forest Heims</title>
        <meta name="description" content="Forest Heims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <header className={styles.header}>
      <div className={styles.description}>
          <p>
          Forest Heims
          </p>
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
            </div>
          </a>
        </div>
        </div>
      </header>
      <main className={styles.main}>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/0dcFWLV_OlI?si=IcnZpe1At_8CpZ8L" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
        <p className={styles.headerSlug}>Particular interests of mine include bioinformatics, psychology, 3D engineering, audio engineering, audio visualization, game development, Linux, cybersecurity, computational chemistry/biology, genetic algorithms, drug discovery, organic chemistry, psychopharmacology, psychonautics, and open source software and education.</p>
        <p className={styles.headerSlug}>I come from an academic background of chemistry, philosophy, and art. Education will always be a value I hold, and I also love to teach and continuously learn.</p>
        <p className={styles.headerSlug}>Some of my hobbies include hiking, juggling, surfing the web, rollerskating, and printmaking. Essential Oil and Hydrosol distillation is a process I am also fond of practicing and learning about.</p>
      </main>
      <footer className={styles.footer}>
      </footer>
    </>
  )
}