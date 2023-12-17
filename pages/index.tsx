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
                forestheims public repositories.
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
        <div className={styles.projects}>
          <h2>
            Psychological Pain
          </h2>
          <p>In this vibrant tapestry of colors and forms, the complexities of psychological pain are explored, with a fragmented mirror symbolizing the broken self and a maze-like path offering a journey towards a luminous, hopeful horizon. Let it be a reminder that even in the depths of emotional turmoil, there's a path leading to brighter days. 🌌✨</p>
          <img src="/psychologicalpain.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Diversity
          </h2>
          <p>In the kaleidoscope of existence, diversity dances in harmonious, surreal splendor. 🌌✨</p>
          <img src="/diversity.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Laser Kitten
          </h2>
          <p>Behold the smugness of a laser-kitten, a fluffy neon spectacle! 🐾✨</p>
          <img src="/kitten.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Quantum Entanglement
          </h2>
          <p>In a world woven by vibrant hues and cosmic connections, two hearts resonate in unison, entwined by the mesmerizing dance of quantum entanglement. 🌠💞</p>
          <img src="/meeting.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Surreal Landscape
          </h2>
          <p>Embark on a journey through this dreamlike, psychedelic landscape, where imagination knows no bounds. 🌌✨</p>
          <img src="/psychedelic.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Vibrant Harmony
          </h2>
          <p>In this cosmic dance, two souls merge in harmony, wrapped in the vibrant embrace of music and light, their hearts resonating with the universal melody of respect and love. 🌌💞🎵</p>
          <img src="/musichearted.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            City EDM
          </h2>
          <p>In this electrifying vista, the city pulsates with the rhythm of love, a neon dreamscape where the beats of electronic dance music bring the stars a little closer. 🌌💖🎶</p>
          <img src="/cityedm.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Digital Dating
          </h2>
          <p>In this digital dreamscape, two souls, vibrant and abstract, reach out to each other, illustrating the magical connection that can spark through the wonder of online dating. 🌐💞</p>
          <img src="/digitaldating.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Making Friends in Forest
          </h2>
          <p>In this vibrant forest, magical creatures gather around a luminous tree, sharing stories and laughter, reminding us that friendship can blossom in the most unexpected places. 🌟</p>
          <img src="/forestfriends.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Cognitive Liberty
          </h2>
          <p>In the realm of the mind, where ideas flow like rivers, sometimes they meet barriers, invisible yet palpable. This image, a vivid tapestry of colors and surreal elements, captures that essence. The brain, our vessel of thoughts, encased yet vibrant, amidst a world both whimsical and constraining. Let it be a reminder of the power and fragility of our cognitive liberty.</p>
          <img src="/cognitive.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Public Transport
          </h2>
          <p>The generated text for this one was way to positively biased. In reality, looking around at everyone on the tram staring down at their phones is a less psychedelic experience and feels more like an insurmountable social barrier.</p>
          <img src="/public.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Gender
          </h2>
          <p>In this image, a figure stands at a crossroads in a mystical landscape, surrounded by paths symbolizing the diverse spectrum of gender identities, under a sky painted with the colors of complexity and understanding. A visual representation of the journey to self-discovery.</p>
          <img src="/gender.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Solutions to Loneliness
          </h2>
          <p>In this vibrant forest, a man finds companionship among whimsical creatures, embodying hope and the rejuvenating power of connections with others and nature. A visual journey from solitude to a world filled with color and life.</p>
          <img src="/newfriends.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Loneliness in Surreal Landscape
          </h2>
          <p>In this scene, a solitary tree stands in an empty desert, its presence amidst the vibrant, swirling sky capturing the profound sense of loneliness and internal turmoil. A visual metaphor for the solitude and emotional complexity of life's challenges.</p>
          <img src="/lone.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Cosmic Love's Lingering Longing
          </h2>
          <p>In this cosmic canvas, emotions dance vividly as a man gazes into the starlit abyss, pondering the echoes of a love that feels like a universe away yet lingers close to his heart. 🌌✨</p>
          <img src="/youniverse.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
        <div className={styles.projects}>
          <h2>
            Astral Reunion Across Planes
          </h2>
          <p>In the cosmic dance of astral encounters, even when earthly words cease, the stars whisper tales of unspoken bonds. 🌌✨</p>
          <img src="/unspoken.webp"
          alt="cosmic dream generated image" width={220} />
        </div>
      </main>
      <footer className={styles.footer}>
       </footer>
    </>
  )
}