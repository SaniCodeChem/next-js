import Head from 'next/head';

import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          A ninja (忍者, Japanese pronunciation: [ɲiꜜɲdʑa]) or shinobi (忍び,
          [ɕinobi]) was a covert agent or mercenary in feudal Japan. The
          functions of a ninja included espionage, deception, and surprise
          attacks. Their covert methods of waging irregular warfare were deemed
          dishonorable and beneath the honor of the samurai. Though shinobi
          proper, as specially trained spies and mercenaries, appeared in the
          15th century during the Sengoku period, antecedents may have existed
          as early as the 12th century. In the unrest of the Sengoku period,
          mercenaries and spies for hire became active in Iga Province and the
          adjacent area around the village of Kōga, and it is from these areas
          that much of the knowledge regarding the ninja is drawn. Following the
          unification of Japan under the Tokugawa shogunate in the 17th century,
          the ninja faded into obscurity. A number of shinobi manuals, often
          based on Chinese military philosophy, were written in the 17th and
          18th centuries, most notably the Bansenshukai (1676). By the time of
          the Meiji Restoration (1868), shinobi had become a topic of popular
          imagination and mystery in Japan. Ninja figured prominently in legend
          and folklore, where they were associated with legendary abilities such
          as invisibility, walking on water and control over natural elements.
          As a consequence, their perception in popular culture is based more on
          such legends and folklore than on the covert actors of the Sengoku
          period.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
