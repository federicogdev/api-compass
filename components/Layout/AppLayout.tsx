import { Box, Container } from "@chakra-ui/react";
import React, { FC } from "react";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import Navbar from "../Navbar";
import AddModal from "../Modals/AddModal";

interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <AddModal />
      <LoginModal />
      <RegisterModal />
      <Container maxW="container.lg">
        <Box py={2}>{children}</Box>
      </Container>
    </>
  );
};

export default AppLayout;
