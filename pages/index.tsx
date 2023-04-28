import SearchBar from "@/components/SearchBar";
import { Box, Heading, Stack, Text, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Stack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Welcome to <br />
        <Text as={"span"} color={"brand.700"}>
          APICompass{" "}
        </Text>
      </Heading>

      <SearchBar />

      <Text color={"subtext"}>
        Sign up today to start sharing and discovering the latest and greatest
        public APIs.
        <br />
        <br />
        And with our unique "compasses" points system, you'll not only gain
        recognition for your contributions, but also climb the ranks of our
        leaderboards.{" "}
      </Text>
    </Stack>
  );
};

export default HomePage;
