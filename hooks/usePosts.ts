import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import { Post } from "@prisma/client";
import { PostWithUser } from "@/types";

type PostsResponse = {
  posts: PostWithUser[];
  pages: number;
  count: number;
};

const usePosts = (uri: string) => {
  const { data, error, isLoading, mutate } = useSWR<PostsResponse>(
    uri,
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default usePosts;
