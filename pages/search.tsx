import Filters from "@/components/Filters";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {}

const SearchPage = (props: Props) => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Filters />
      <Box flex={{ base: 1, md: "7" }} />
    </Flex>
  );
};

export default SearchPage;
