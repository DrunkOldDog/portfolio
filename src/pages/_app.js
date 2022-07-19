import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { theme } from '../common/theme';

import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
