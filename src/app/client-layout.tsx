'use client';

import { useEffect } from "react";
import ReactGA from "react-ga4";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../common/theme';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_TRACKING_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}
