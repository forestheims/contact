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
        <meta name="description" content="Contact information for Forest Heims" />
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
      <Script async defer data-website-id={process.env.DATA_WEBSITE_ID} src={process.env.UMAMI_SRC} />
      <header className={styles.header}>
      <div className={styles.description}>
          <p>
          Forest Heims | Contact Info
          </p>
        </div>
      <div className={styles.links}>
        <h2 className={styles.headingLink}>
          <a href="https://forestheims.net/" className={styles.link}>
            Home
          </a>
        </h2>
        <h2 className={styles.headingLink}>
          <a href="https://forestheims.dev/" className={styles.link}>
            Blog
          </a>
        </h2>
        <h2 className={styles.headingLink}>
          <a href="https://forestheims.org/" className={styles.link}>
            Projects
          </a>
        </h2>
        <h2 className={styles.headingLink}>
          <a href="https://forestheims.com/" className={styles.link}>
            Contact
          </a>
        </h2>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.center}>
        <div className={styles.logo}>
          <img src="/foxy.gif"
            alt="cute animated fox face gif" width={220} height={180} />
        </div>
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
                forestheims has 117 repositories available.
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
                The resume of a job seeking software developer.
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
                Email is the preferred contact method.
              </p>
            </div>
          </a>

        </div>
      </main>
      <footer className={styles.footer}><p>
          This static webpage was built with&nbsp;
            <code className={styles.code}>Next.js</code>
          </p></footer>
    </>
  )
}