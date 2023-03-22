import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Forest Heims | Contact Page</title>
      <meta name="description" content="Contact information and links for Forest Heims" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Forest Heims | Contact Me</h1>
      <div className={styles.Links}>
        <a className={styles.Link} href="https://forestheims.net">
          Home
        </a>
        <a className={styles.Link} href="https://forestheims.dev">
          Blog
        </a>
        <a className={styles.Link} href="https://forestheims.org">
          Projects
        </a>
        <a className={styles.Link} href="https://forestheims.com">
          Contact
        </a>
      </div>
    </header>
    <main className={styles.main}>
      <div className={styles.description}>

      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/pony.webp"
          alt="AI line art of a horse"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/forestheims/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            LinkedIn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Connect with or contact me here.
          </p>
        </a>

        <a
          href="https://github.com/forestheims"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            GitHub <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            forestheims has 114 repositories available.
          </p>
        </a>

        <a
          href="https://forestheims.net/resume/2023-resume-2.3.pdf"
          className={styles.card}
          target="_blank"
        >
          <h2 className={inter.className}>
            Resume <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            The resume of a job seeking software developer.
          </p>
        </a>
        
        <a
          href="mailto:forestheims@gmail.com"
          className={styles.card}
          target="_blank"
        >
          <h2 className={inter.className}>
            Email <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Email is probably the best way to get in contact with me.
          </p>
        </a>

      </div>
    </main>
    <footer className={styles.description}>
      <p>
        This page built with&nbsp;
          <code className={styles.code}>Next.js</code>
      </p>
    </footer>
  </>
  )
}
