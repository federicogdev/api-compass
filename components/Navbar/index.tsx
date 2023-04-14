import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";
import UserDropdown from "./UserDropdown";

const Links = [
  { label: "Search", href: "/" },
  { label: "Rankings", href: "/rankings" },
];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoading = false;

  return (
    <Box px={4}>
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
              <NavLink key={i} onClick={onClose} link={link} />
            ))}
          </HStack>

          <UserDropdown />
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
