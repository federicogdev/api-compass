import PostCard from "@/components/Cards/PostCard";
import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import usePosts from "@/hooks/usePosts";
import { Box, Center, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";

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
    <Flex direction={{ base: "column", md: "row" }} marginTop={10}>
      <Filters totalResults={data?.count ? data.count : 0} />
      <Box flex={{ base: 1, md: "6" }} px={4}>
        {isLoading ? (
          <Center minH={"50vh"}>
            <BeatLoader color="#00677e" />
          </Center>
        ) : data?.posts && data.posts.length > 0 ? (
          data?.posts.map((post, i) => <PostCard post={post} />)
        ) : (
          <Center minH={"50vh"}>No results</Center>
        )}

        {!!data?.pages && !!data?.count && data.pages > 1 && (
          <Pagination totalPages={data?.pages} count={data?.count} />
        )}
      </Box>
    </Flex>
  );
};

export default SearchPage;
