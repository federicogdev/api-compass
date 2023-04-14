// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "@/util/chakra/theme";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW="container.lg">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
