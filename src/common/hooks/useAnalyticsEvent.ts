import ReactGA from "react-ga4";

type AnalyticsEvent = (action: string, label: string) => void;

export const useAnalyticsEvent = (category: string): AnalyticsEvent => (action: string, label: string): void => {
  ReactGA.event({ category, action, label });
};
