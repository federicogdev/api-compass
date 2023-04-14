import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface Link {
  href: string;
  label: string;
}

interface NavLinkProps {
  link: Link;
  onClick: () => void;
}

const NavLink: FC<NavLinkProps> = ({ link, onClick }) => (
  <ChakraLink
    as={Link}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "red.500",
    }}
    href={link.href}
    onClick={onClick}
  >
    {link.label}
  </ChakraLink>
);

export default NavLink;
