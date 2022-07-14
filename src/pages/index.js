import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Button } from "../components/Button";
import { useAnalyticsEvent } from "../common/hooks";
import SocialNetworks from "../components/SocialNetworks";

export default function Home() {
  const resumeEventTracker = useAnalyticsEvent("Resume");

  const handleButtonClick = () =>
    resumeEventTracker("download", "Download Resume");

  return (
    <div className={styles.homePage}>
      <div className="container">
        <Head>
          <title>Juani Reyes - Portfolio</title>
          <meta
            name="description"
            content="Hello there! Welcome to my portfolio. I'm Juani, a Frontend Engineer and UX Designer from Bolivia."
          />
          <meta property="og:title" content="Juani Reyes - Portfolio" />
          <meta
            property="og:description"
            content="Hello there! Welcome to my portfolio. I'm Juani, a Frontend Engineer and UX Designer from Bolivia."
          />
          <meta property="og:url" content="https://juanireyes.com" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.svg" />
        </Head>

        <div className={styles.content}>
          <section>
            <h1>
              Hello there, I’m <span className="primary">Juani</span>
            </h1>
            <h1 style={{ marginBottom: 16 }}>
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

            <a
              href="/juani_reyes_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button onClick={handleButtonClick}>Resume Here!</Button>
            </a>
          </section>

          <section>
            <SocialNetworks />
          </section>
        </div>
      </div>
    </div>
  );
}
