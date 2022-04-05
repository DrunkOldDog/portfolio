import { useEffect } from "react";
import ReactGA from "react-ga";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
