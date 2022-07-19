import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#979527",
      dark: "#1d1d1d",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          color: "brand.dark",
          _hover: {
            background: "transparent",
            color: "gray.100",
            border: "2px solid #fff",
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        color: "#fff",
      },
    },
  },
});
