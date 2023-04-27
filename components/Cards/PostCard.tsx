import { PostWithUser } from "@/types";
import {
  Box,
  Stack,
  Text,
  Flex,
  Tag,
  Avatar,
  VStack,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { formatDistanceToNowStrict } from "date-fns";
import { MdSettings } from "react-icons/md";
import { Cors } from "@prisma/client";
import { getCorsTagColor } from "@/util/getTagColors";
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
          <Text fontSize="2xl" fontWeight="700" flex={5}>
            {post.title}
          </Text>
          <Text color="subtext" fontSize="sm">
            {post.uri}
          </Text>
        </Box>

        <Flex flex={1} alignItems="center" justify="flex-end" color="subtext">
          <Flex alignItems="center" fontSize={22} mr={2}>
            <AiOutlineHeart size={22} />
            <Text ml="2">0</Text>
          </Flex>

          <Flex alignItems="center" fontSize={22}>
            <AiOutlineMessage size={22} />
            <Text ml="2">0</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex align="center" justifyContent="space-between">
        <Stack flex={5}>
          <Flex flexWrap="nowrap">
            <Tag colorScheme="green" mr={1}>
              {post.auth}
            </Tag>
            <Tag colorScheme={getCorsTagColor(post.cors)} mr={1}>
              {post.cors}
            </Tag>
            <Tag colorScheme="orange" mr={1}>
              {post.paid}
            </Tag>
            <Tag colorScheme="blue">{post.https}</Tag>
          </Flex>

          <Flex flexWrap="nowrap">
            {post.tags.map((tag) => (
              <Tag mr={1}>{tag}</Tag>
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
