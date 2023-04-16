import useLoginModal from "@/hooks/useLoginModal";
import { AddIcon } from "@chakra-ui/icons";
import { Button, Box, Flex } from "@chakra-ui/react";
import React from "react";
import UserDropdown from "./UserDropdown";

type Props = {};

const NavbarRight = (props: Props) => {
  const isLoading = false;
  const currentUser = false;

  const loginModal = useLoginModal();

  return (
    <>
      {isLoading ? (
        <Box />
      ) : !!currentUser ? (
        <Flex alignItems="center">
          <Button variant="solid" bg="brand.700" size="sm" mr={4}>
            <AddIcon />
          </Button>
          <UserDropdown user={null} />
        </Flex>
      ) : (
        <Button
          variant={"solid"}
          color="white"
          background="brand.700"
          _hover={{ color: "white", background: "brand.800" }}
          size={"sm"}
          mr={{ base: 0, md: 4 }}
          onClick={() => loginModal.onOpen()}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default NavbarRight;
