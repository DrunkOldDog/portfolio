import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useAnalyticsEvent } from "@common/hooks";
import SocialNetworks from "@components/SocialNetworks";
import { motion } from "framer-motion";
import { Box, Container, Text, Button, Stack, Flex } from "@chakra-ui/react";
import MotionText from "@components/MotionText/MotionText";

export default function Home() {
  const resumeEventTracker = useAnalyticsEvent("Resume");

  const handleButtonClick = () =>
    resumeEventTracker("download", "Download Resume");

  return (
    <div className={styles.homePage}>
      <Container maxW={["90%", "80%"]}>
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
            <Flex columnGap={1} mb={[-1, -2]}>
              <MotionText
                as="h1"
                fontWeight="bold"
                fontSize={{ base: "3xl", lg: "4xl" }}
              >
                Hello there, I’m
              </MotionText>
              <MotionText
                as="h1"
                fontWeight="bold"
                color="brand.primary"
                delay={1}
                fontSize={{ base: "3xl", lg: "4xl" }}
              >
                Juani
              </MotionText>
            </Flex>

            <Flex columnGap={2} flexWrap="wrap" mb={[1, 0]}>
              <MotionText
                as="h1"
                fontWeight="bold"
                color="brand.primary"
                delay={1.5}
                fontSize={{ base: "2xl", lg: "4xl" }}
                mb={-1}
              >
                Frontend Engineer
              </MotionText>

              <MotionText
                as="h1"
                fontWeight="bold"
                delay={2.5}
                fontSize={{ base: "2xl", lg: "4xl" }}
              >
                UX Designer
              </MotionText>
            </Flex>

            <Flex columnGap={1} flexWrap="wrap" mb={1}>
              <MotionText
                as="h3"
                fontWeight="bold"
                delay={3}
                fontSize={["xl", "3xl"]}
              >
                based in La Paz,
              </MotionText>

              <MotionText
                as="h3"
                fontWeight="bold"
                color="brand.primary"
                delay={4}
                fontSize={["xl", "3xl"]}
              >
                Bolivia
              </MotionText>
            </Flex>
          </Box>

          <Box
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 4, duration: 1.2, ease: "easeOut" },
              },
            }}
          >
            <Text fontWeight="bold" fontSize={{ base: "lg", lg: "2xl" }}>
              Sorry to bother you but this site is under construction{" "}
              <span className="primary">(since 1996)</span>
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "lg", lg: "2xl" }}
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
                size={{ base: "md", lg: "lg" }}
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
