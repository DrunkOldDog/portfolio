import ReactGA from "react-ga";

export const useAnalyticsEvent = (category) => (action, label) => {
  ReactGA.event({ category, action, label });
};
