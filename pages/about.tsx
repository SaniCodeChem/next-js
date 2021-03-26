import Head from 'next/head';
import styles from '../styles/Home.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <h2>Etymology</h2>
        <p className={styles.text}>
          Ninja is the on'yomi (Early Middle Chinese–influenced) reading of the
          two kanji "忍者". In the native kun'yomi reading, it is pronounced
          shinobi, a shortened form of shinobi-no-mono (忍びの者). The word
          shinobi appears in the written record as far back as the late 8th
          century in poems in the Man'yōshū. The underlying connotation of
          shinobi (忍) means "to steal away; to hide" and—by extension—"to
          forbear", hence its association with stealth and invisibility. Mono
          (者) means "a person". Historically, the word ninja was not in common
          use, and a variety of regional colloquialisms evolved to describe what
          would later be dubbed ninja. Along with shinobi, these include monomi
          ("one who sees"), nokizaru ("macaque on the roof"), rappa ("ruffian"),
          kusa ("grass") and Iga-mono ("one from Iga"). In historical documents,
          shinobi is almost always used. Kunoichi (くノ一）is, originally, an
          argot which means "woman":p168 it supposedly comes from the characters
          くノ一 (respectively hiragana ku, katakana no and kanji ichi), which
          make up the three strokes that form the kanji for "woman" (女).:p168
          In fiction written in the modern era kunoichi means "female
          ninja".:p167 In the Western world, the word ninja became more
          prevalent than shinobi in the post–World War II culture, possibly
          because it was more comfortable for Western speakers. In English, the
          plural of ninja can be either unchanged as ninja, reflecting the
          Japanese language's lack of grammatical number, or the regular English
          plural ninjas.
        </p>
        <h2>History</h2>
        <p className={styles.text}>
          It was not until the 15th century that spies were specially trained
          for their purpose. It was around this time that the word shinobi
          appeared to define and clearly identify ninja as a secretive group of
          agents. Evidence for this can be seen in historical documents, which
          began to refer to stealthy soldiers as shinobi during the Sengoku
          period. Later manuals regarding espionage are often grounded in
          Chinese military strategy, quoting works such as The Art of War by Sun
          Tzu. The ninja emerged as mercenaries in the 15th century, where they
          were recruited as spies, raiders, arsonists and even terrorists.
          Amongst the samurai, a sense of ritual and decorum was observed, where
          one was expected to fight or duel openly. Combined with the unrest of
          the Sengoku period, these factors created a demand for men willing to
          commit deeds considered disreputable for conventional warriors. By the
          Sengoku period, the shinobi had several roles, including spy (kanchō),
          scout (teisatsu), surprise attacker (kishu), and agitator (konran).
          The ninja families were organized into larger guilds, each with their
          own territories. A system of rank existed. A jōnin ("upper person")
          was the highest rank, representing the group and hiring out
          mercenaries. This is followed by the chūnin ("middle person"),
          assistants to the jōnin. At the bottom was the genin ("lower person"),
          field agents drawn from the lower class and assigned to carry out
          actual missions.
        </p>
      </div>
    </>
  );
};

export default About;
