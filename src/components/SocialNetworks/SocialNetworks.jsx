import styled from "@emotion/styled";
import { Spotify, Instagram, LinkedIn, GitHub } from "../../common/icons";
import { useAnalyticsEvent } from "../../common/hooks";

const SocialNetworksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIcons = styled.div`
  margin-top: 8px;

  svg {
    fill: #fff;
    height: 24px;
    width: 24px;
    margin: 0 6px;
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
    <SocialNetworksContainer>
      <h3>Follow me on my socials:</h3>

      <SocialIcons>
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
    </SocialNetworksContainer>
  );
}
