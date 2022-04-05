import ReactGA from "react-ga";
import "../../styles/globals.css";

const TRACKING_ID = "G-K3LJK9GVPH"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
