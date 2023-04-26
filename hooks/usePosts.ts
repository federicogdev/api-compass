import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import { Post } from "@prisma/client";
import { PostWithUser } from "@/types";

const usePosts = (uri: string) => {
  const { data, error, isLoading, mutate } = useSWR<PostWithUser[]>(
    uri,
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default usePosts;
