import styled from "@emotion/styled";
import { Spotify, Instagram, LinkedIn, GitHub } from "@common/icons";
import { useAnalyticsEvent } from "@common/hooks";
import { Box, Flex, Text } from "@chakra-ui/react";

const SocialIcons = styled(Flex)`
  svg {
    fill: #fff;
    height: 24px;
    width: 24px;
    cursor: pointer;
    transition: fill 0.25s;

    &:hover {
      fill: var(--primary-color);
    }
  }
`;

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

export default function SocialNetworks() {
  const socialMediaEventTracker = useAnalyticsEvent("Social Media");

  return (
    <Box alignSelf={"center"}>
      <Text fontWeight={"bold"} fontSize={{ base: "lg", xl: "2xl" }}>
        Follow me on my socials:
      </Text>

      <SocialIcons justifyContent={"center"} columnGap={3}>
        {SOCIAL_MEDIA.map(({ url, Component }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              socialMediaEventTracker(
                Component.name,
                `${Component.name} clicked`
              )
            }
          >
            <Component />
          </a>
        ))}
      </SocialIcons>
    </Box>
  );
}
