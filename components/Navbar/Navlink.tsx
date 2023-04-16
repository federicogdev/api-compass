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
  onClick?: () => void;
}

const Navlink: FC<NavLinkProps> = ({ link, onClick }) => {
  const router = useRouter();
  return (
    <ChakraLink
      as={Link}
      px={2}
      py={1}
      color={router.asPath === link.href ? "brand.700" : "subtext"}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "brand.700",
      }}
      href={link.href}
      onClick={onClick}
    >
      {link.label}
    </ChakraLink>
  );
};

export default Navlink;
