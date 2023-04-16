import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Container,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";

import Link from "next/link";
import NavbarRight from "./NavbarRight";
import NavLink from "./Navlink";

const Links = [
  { label: "Explore", href: "/" },
  { label: "Rankings", href: "/rankinks" },
];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="zinc.900" px={4}>
      <Container maxW="container.lg">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box display={{ base: "none", md: "block" }} as={Link} href="/">
            <Image src="/images/logo.png" alt="logo" width={30} height={30} />
          </Box>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link, i) => (
              <NavLink key={i} link={link} />
            ))}
          </HStack>

          <NavbarRight />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={i} onClick={onClose} link={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};
export default Navbar;
