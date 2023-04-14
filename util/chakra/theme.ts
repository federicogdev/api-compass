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
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
