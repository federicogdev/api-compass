import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface Link {
  href: string;
  label: string;
}

interface NavLinkProps {
  link: Link;
  onClick: () => void;
}

const NavLink: FC<NavLinkProps> = ({ link, onClick }) => {
  const router = useRouter();
  const LINK_COLOR = useColorModeValue("black", "white");
  return (
    <ChakraLink
      as={Link}
      px={2}
      py={1}
      fontWeight="bold"
      color={router.asPath === link.href ? "orange.400" : LINK_COLOR}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "orange.400",
      }}
      href={link.href}
      onClick={onClick}
    >
      {link.label}
    </ChakraLink>
  );
};

export default NavLink;
