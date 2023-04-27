import useSearchFilters from "@/hooks/useSearchFilters";
import { Button, ButtonGroup, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
type PaginationProps = {
  totalPages: number;
  count: number;
};

const Pagination = ({ totalPages, count }: PaginationProps) => {
  const { page, pageHandler } = useSearchFilters();

  const canGoBack = Number(page) > 1;
  const canGoForward = Number(page) < totalPages;

  const perPage = 10;

  const startIndex = (Number(page) - 1) * perPage + 1;
  const endIndex = Math.min(startIndex + perPage - 1, count);

  return (
    <VStack>
      <Text color="subtext">
        Showing{" "}
        <Text as="span" fontWeight="bold" color="white">
          {startIndex}
        </Text>{" "}
        to{" "}
        <Text as="span" fontWeight="bold" color="white">
          {endIndex}
        </Text>{" "}
        of{" "}
        <Text as="span" fontWeight="bold" color="white">
          {count}
        </Text>{" "}
        results
      </Text>
      <ButtonGroup>
        <Button isDisabled={!canGoBack} onClick={() => pageHandler(1)}>
          <FaAngleDoubleLeft />
        </Button>
        <Button
          isDisabled={!canGoBack}
          onClick={() => pageHandler(Number(page) - 1)}
        >
          <FaAngleLeft />
        </Button>
        <Button
          isDisabled={!canGoForward}
          onClick={() => pageHandler(Number(page) + 1)}
        >
          <FaAngleRight />
        </Button>
        <Button
          isDisabled={!canGoForward}
          onClick={() => pageHandler(totalPages)}
        >
          <FaAngleDoubleRight />
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Pagination;
