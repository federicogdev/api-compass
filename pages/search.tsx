import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import usePosts from "@/hooks/usePosts";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {}

const SearchPage = (props: Props) => {
  const { query } = useRouter();

  const q = query.query || "";
  const cors = query.cors || "";
  const auth = query.auth || "";
  const https = query.https || "";
  const paid = query.paid || "";
  const page = query.page || 1;

  const { data, isLoading, error, mutate } = usePosts(
    `/api/posts?query=${q}&cors=${cors}&auth=${auth}&paid=${paid}&https=${https}&page=${page}`
  );
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Filters />
      <Box flex={{ base: 1, md: "7" }}>
        <Heading>{data?.count}</Heading>
        {data?.posts.map((el) => (
          <Box>
            <Text>{el.title}</Text>
            <Text>{el.auth}</Text>
            <Text>{el.https}</Text>
            <Text>{el.paid}</Text>
            <Text>{el.cors}</Text>
          </Box>
        ))}

        {/* {data?.pages && data?.count && ( */}
        <Pagination totalPages={100} count={1000} />
        {/* )} */}
      </Box>
    </Flex>
  );
};

export default SearchPage;
