import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Spotify, Instagram, LinkedIn, GitHub } from "../common/icons";
import { Button } from "../components";

const SOCIAL_MEDIA = [
  {
    url: "https://open.spotify.com/user/juani888",
    Component: Spotify,
  },
  {
    url: "https://instagram.com/juanireyesg",
    Component: Instagram,
  },
  {
    url: "https://github.com/DrunkOldDog",
    Component: GitHub,
  },
  {
    url: "https://www.linkedin.com/in/juanireyes",
    Component: LinkedIn,
  },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Juani Reyes - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={styles.content}>
        <div>
          <section>
            <h1>
              Hello there, I’m <span className="primary">Juani</span>
            </h1>
            <h1 style={{ marginBottom: 8 }}>
              <span className="primary">Frontend Engineer</span> / UX Designer
            </h1>
            <h2>
              based in La Paz, <span className="primary">Bolivia</span>
            </h2>
          </section>

          <section className={styles.middleSection}>
            <h2 style={{ marginBottom: 8 }}>
              Sorry to bother you but this site is under construction{" "}
              <span className="primary">(since 1996)</span>
            </h2>
            <h2 style={{ marginBottom: 32 }}>
              So if you are on a hurry you can download my lovely:
            </h2>

            <a href="/juani_reyes_resume.pdf" download>
              <Button>Resume Here!</Button>
            </a>
          </section>

          <section>
            <h3>Follow me on my socials:</h3>

            <div className={styles.socialIcons}>
              {SOCIAL_MEDIA.map(({ url, Component }) => (
                <a key={url} href={url} target="_blank" rel="noreferrer">
                  <Component />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
