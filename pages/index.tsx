import React from "react";
import { useSession } from "next-auth/react";
import usePosts from "@/hooks/usePosts";
import { Box, Text } from "@chakra-ui/react";

interface Props {}

const Home = (props: Props) => {
  const { status, data: session } = useSession();

  const { data, error, isLoading } = usePosts();
  return (
    <div>
      {data?.map((el) => (
        <Box key={el.id}>
          <Text>{el.title}</Text>
        </Box>
      ))}
    </div>
  );
};

export default Home;
