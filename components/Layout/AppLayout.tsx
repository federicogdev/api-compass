import { Box, Container } from "@chakra-ui/react";
import React, { FC } from "react";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import Navbar from "../Navbar";

interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <LoginModal />
      <RegisterModal />
      <Container maxW="container.lg">
        <Box pt="7rem">{children}</Box>
      </Container>
    </>
  );
};

export default AppLayout;
