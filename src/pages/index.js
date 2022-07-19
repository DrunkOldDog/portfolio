import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useAnalyticsEvent } from "@common/hooks";
import SocialNetworks from "@components/SocialNetworks";
import { Box, Container, Heading, Text, Button, Stack } from "@chakra-ui/react";

export default function Home() {
  const resumeEventTracker = useAnalyticsEvent("Resume");

  const handleButtonClick = () =>
    resumeEventTracker("download", "Download Resume");

  return (
    <div className={styles.homePage}>
      <Container maxW={["100%", "80%"]}>
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

        <Stack justifyContent={"center"} h="100vh" rowGap={4}>
          <Box>
            <Heading
              as="h1"
              size={{ base: "xl", xl: "2xl" }}
              mb={{ base: 0, xl: 2 }}
            >
              Hello there, I’m <span className="primary">Juani</span>
            </Heading>
            <Heading mb={{ xl: 2 }} size={{ base: "xl", xl: "2xl" }}>
              <span className="primary">Frontend Engineer</span> / UX Designer
            </Heading>
            <Heading as="h3" size="lg">
              based in La Paz, <span className="primary">Bolivia</span>
            </Heading>
          </Box>

          <Box>
            <Text mb={1} fontWeight="bold" fontSize={{ base: "lg", xl: "2xl" }}>
              Sorry to bother you but this site is under construction{" "}
              <span className="primary">(since 1996)</span>
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "lg", xl: "2xl" }}
              mb={6}
            >
              So if you are on a hurry you can download my lovely:
            </Text>

            <a
              href="/juani_reyes_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size={{ base: "md", xl: "lg" }}
                onClick={handleButtonClick}
              >
                Resume Here!
              </Button>
            </a>
          </Box>

          <SocialNetworks />
        </Stack>
      </Container>
    </div>
  );
}
