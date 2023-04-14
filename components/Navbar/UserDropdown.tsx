import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  useColorMode,
  useColorModeValue,
  Text,
  Box,
  Switch,
  Flex,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";

const UserDropdown = () => {
  const user = true;
  const { colorMode, toggleColorMode } = useColorMode();

  const MENU_BG = useColorModeValue("gray.100", "zinc.900");
  const MENU_ITEM_HOVER = useColorModeValue("gray.200", "zinc.800");
  const MENU_BORDER_COLOR = useColorModeValue("gray.300", "zinc.700");

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
          // src={user.image ? user.image : "/assets/user.png"}
        />
      </MenuButton>
      <MenuList
        alignItems={"center"}
        padding={2}
        bg={MENU_BG}
        borderColor={MENU_BORDER_COLOR}
        // borderWidth={0}
        shadow="sm"
      >
        {user ? (
          <>
            <br />
            <Center>
              <Avatar
                size={"lg"}
                // src={user.image ? user.image : "/assets/user.png"}
              />
            </Center>
            <br />
            <Center>
              <p>User</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem
              bg={MENU_BG}
              _hover={{ bg: MENU_ITEM_HOVER, borderRadius: 5 }}
              as={Link}
              href="/"
            >
              My Profile
            </MenuItem>
            <MenuDivider />

            <Flex align="center" justify="space-between" flex="1" px={3} py={2}>
              <Text>Dark Mode</Text>
              <Switch
                colorScheme="orange"
                onChange={() => toggleColorMode()}
                isChecked={colorMode === "dark"}
              />
            </Flex>

            <MenuDivider />

            <MenuItem
              bg={MENU_BG}
              icon={<FiLogOut />}
              color="red.400"
              _hover={{ bg: "red.400", color: "white", borderRadius: 5 }}
              onClick={() => signOut()}
            >
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              bg={MENU_BG}
              _hover={{ bg: MENU_ITEM_HOVER, borderRadius: 5 }}
            >
              Login
            </MenuItem>

            <MenuItem
              bg={MENU_BG}
              _hover={{ bg: MENU_ITEM_HOVER, borderRadius: 5 }}
            >
              Register
            </MenuItem>

            <MenuDivider />

            <Flex align="center" justify="space-between" flex="1" px={3} py={2}>
              <Text>Dark Mode</Text>
              <Switch
                colorScheme="orange"
                onChange={() => toggleColorMode()}
                isChecked={colorMode === "dark"}
              />
            </Flex>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default UserDropdown;
