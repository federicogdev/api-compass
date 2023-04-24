import Filters from "@/components/Filters";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {}

const SearchPage = (props: Props) => {
  return (
    <Flex>
      <Filters />
      <Box flex="7" />
    </Flex>
  );
};

export default SearchPage;
