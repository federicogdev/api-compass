import Filters from "@/components/Filters";
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
  const protocol = query.protocol || "";
  const type = query.type || "";

  const { data, isLoading, error, mutate } = usePosts(
    `/api/posts?query=${q}&cors=${cors}&auth=${auth}&type=${type}&protocol=${protocol}`
  );
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Filters />
      <Box flex={{ base: 1, md: "7" }}>
        <Heading>{q}</Heading>
        {data?.map((el) => (
          <Box>
            <Text>{el.title}</Text>
            <Text>{el.auth}</Text>
            <Text>{el.https}</Text>
            <Text>{el.paid}</Text>
            <Text>{el.cors}</Text>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default SearchPage;
