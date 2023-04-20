import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";

import { useSession } from "next-auth/react";

const UserDropdown = () => {
  const { status, data: session } = useSession();

  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"sm"}
          src={session?.user.image ? session.user.image : "/images/user.png"}
        />
      </MenuButton>
      <MenuList alignItems={"center"} bg="zinc.900" padding={2}>
        <br />
        <Center>
          <Avatar
            size={"2xl"}
            src={session?.user.image ? session.user.image : "/images/user.png"}
          />
        </Center>
        <br />
        <Center>
          <p>{session?.user.name}</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem bg="zinc.900" _hover={{ bg: "brand.700", borderRadius: 5 }}>
          My Profile
        </MenuItem>
        <MenuItem
          bg="zinc.900"
          icon={<FiLogOut />}
          color="red.300"
          onClick={() => signOut()}
          _hover={{ bg: "red.300", color: "white", borderRadius: 5 }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserDropdown;
