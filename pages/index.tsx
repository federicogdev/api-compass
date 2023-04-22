import React from "react";
import { useSession } from "next-auth/react";
import usePosts from "@/hooks/usePosts";
import { Box, Text } from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";

interface Props {}

const HomePage = (props: Props) => {
  const { status, data: session } = useSession();

  const { data, error, isLoading } = usePosts();
  return (
    <>
      <SearchBar />
    </>
  );
};

export default HomePage;
