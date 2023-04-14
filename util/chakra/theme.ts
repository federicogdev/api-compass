import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Rubik } from "next/font/google";
import type { Styles, GlobalStyleProps } from "@chakra-ui/theme-tools";

const nextFont = Rubik({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const styles: Styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const components = {};

const fonts = {
  body: nextFont.style.fontFamily,
  heading: nextFont.style.fontFamily,
};

const colors = {
  grassTeal: "#88ccca",
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
