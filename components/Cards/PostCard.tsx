import { PostWithUser } from "@/types";
import {
  getAuthTagColor,
  getCorsTagColor,
  getHttpsTagColor,
  getPaidTagColor,
} from "@/util/getTagColors";
import {
  getAuthTagLabel,
  getCorsTagLabel,
  getHttpsTagLabel,
} from "@/util/getTagLabel";
import {
  Avatar,
  Box,
  Flex,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { formatDistanceToNowStrict } from "date-fns";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

type PostCardProps = {
  post: PostWithUser;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Stack
      as={Link}
      href={`/p/${post.id}`}
      p="5"
      boxShadow="lg"
      cursor="pointer"
      mb={3}
      bg="zinc.900"
      borderRadius={6}
    >
      <Flex align="center" justifyContent="space-between">
        <Box>
          <Text fontSize="2xl" fontWeight="700" flex={2}>
            {post.title}
          </Text>
          <Text color="subtext" fontSize="sm">
            {post.uri}
          </Text>
        </Box>

        <Flex flex={1} alignItems="center" justify="flex-end" color="subtext">
          <Flex alignItems="center" fontSize={18} mr={2}>
            <AiOutlineHeart size={18} />
            <Text ml="2">{post.likedIds.length}</Text>
          </Flex>

          <Flex alignItems="center" fontSize={18}>
            <AiOutlineMessage size={18} />
            <Text ml="2">{post.comments.length}</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex align="center" justifyContent="space-between">
        <Stack flex={2}>
          <Flex flexWrap="nowrap">
            {post.auth && (
              <Tag colorScheme={getAuthTagColor(post.auth)} mr={1}>
                {getAuthTagLabel(post.auth)}
              </Tag>
            )}

            {post.cors && (
              <Tag colorScheme={getCorsTagColor(post.cors)} mr={1}>
                {getCorsTagLabel(post.cors)}
              </Tag>
            )}

            {post.paid && (
              <Tag colorScheme={getPaidTagColor(post.paid)} mr={1}>
                {post.paid}
              </Tag>
            )}
            {post.https && (
              <Tag colorScheme={getHttpsTagColor(post.https)}>
                {getHttpsTagLabel(post.https)}
              </Tag>
            )}
          </Flex>

          <Flex flexWrap="nowrap">
            {post.tags.map((tag) => (
              <Tag mr={1}>
                <TagLabel color="subtext">{tag}</TagLabel>
              </Tag>
            ))}
          </Flex>
        </Stack>

        <Flex flex={1} alignItems="flex-end" flexDirection="column">
          <Flex alignItems="center">
            <Avatar
              size="sm"
              src={post.user?.image ? post.user.image : "/images/user.png"}
              mr={3}
            />
            <Box>
              <Text color="subtext" fontSize="sm">
                {post.user.name}
              </Text>
              <Text color="subtext" fontSize="sm">
                {formatDistanceToNowStrict(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default PostCard;
