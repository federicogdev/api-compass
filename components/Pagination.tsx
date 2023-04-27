import useSearchFilters from "@/hooks/useSearchFilters";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Pagination = (props: Props) => {
  const { page, pageHandler } = useSearchFilters();
  return (
    <Flex>
      {[...Array(5).keys()].map((page) => (
        <Button onClick={() => pageHandler(page + 1)}>{page}</Button>
      ))}
    </Flex>
  );
};

export default Pagination;
