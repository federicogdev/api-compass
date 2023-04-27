import useSearchFilters from "@/hooks/useSearchFilters";
import {
  Text,
  Flex,
  Stack,
  Divider,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";

interface Props {}

// interface FilterSearchProps {
//   searchQuery?: string;
//   type?: string;
//   protocol?: string;
//   cors?: string;
//   auth?: string;
//   page?: number;
// }

const Filters = (props: Props) => {
  const {
    authHandler,
    corsHandler,
    filterSearch,
    protocolHandler,
    typeHandler,
    auth,
    cors,
    page,
    protocol,
    query,
    type,
  } = useSearchFilters();
  const router = useRouter();

  // const {
  //   query,
  //   type = "all",
  //   protocol = "all",
  //   cors = "all",
  //   auth = "all",
  //   page = 1,
  // } = router.query;

  // const filterSearch = ({
  //   type,
  //   protocol,
  //   cors,
  //   auth,
  //   page,
  // }: FilterSearchProps) => {
  //   const { query } = router;

  //   if (page) query.page = page.toString();

  //   if (type) query.type = type;
  //   if (protocol) query.protocol = protocol;
  //   if (cors) query.cors = cors;
  //   if (auth) query.auth = auth;

  //   router.push({
  //     pathname: router.pathname,
  //     query: query,
  //   });
  // };

  // const typeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   filterSearch({ type: e.target.value });
  // };
  // const authHandler = (e: ChangeEvent<HTMLSelectElement>) => {
  //   filterSearch({ auth: e.target.value });
  // };

  // const protocolHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   filterSearch({ protocol: e.target.value });
  // };

  // const corsHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   filterSearch({ cors: e.target.value });
  // };

  return (
    <Stack
      flex={{ base: 1, md: "2" }}
      p={4}
      spacing={4}
      bg="zinc.900"
      borderRadius={6}
    >
      <Flex justifyContent="space-between">
        <Text fontWeight={700}>Filter results</Text>
        <Text onClick={() => router.push("/search")} cursor="pointer">
          Clear all
        </Text>
      </Flex>

      <Divider />

      <Text fontWeight={700}>Results: 0</Text>

      <Stack>
        <Text color="subtext" fontWeight={700}>
          Type
        </Text>
        <RadioGroup value={type as string}>
          <Stack>
            <Radio
              size="md"
              name="type"
              colorScheme="brand"
              checked={type === "all"}
              onChange={typeHandler}
              value="all"
            >
              All
            </Radio>
            <Radio
              size="md"
              name="type"
              color="red.700"
              value="free"
              onChange={typeHandler}
            >
              Free
            </Radio>

            <Radio
              size="md"
              name="type"
              colorScheme="brand"
              value="subscription"
              onChange={typeHandler}
            >
              Subscription
            </Radio>
            <Radio
              size="md"
              name="type"
              value="paid"
              colorScheme="brand"
              onChange={typeHandler}
            >
              Paid
            </Radio>
          </Stack>
        </RadioGroup>
      </Stack>

      <Stack>
        <Text mr={10} color="subtext" fontWeight={700}>
          Auth
        </Text>
        <Select
          placeholder="Select option"
          size="sm"
          value={auth}
          onChange={authHandler}
        >
          <option value="all">All</option>
          <option value="api_key">API Key</option>
          <option value="o_auth">O Auth</option>
          <option value="user_agent">User Agent</option>
          <option value="x_mashape_key">Mashape Key</option>
          <option value="none">No Auth</option>
        </Select>
      </Stack>

      <Stack>
        <Text color="subtext" fontWeight={700}>
          Protocol
        </Text>
        <RadioGroup value={protocol as string}>
          <Stack>
            <Radio
              size="md"
              name="protocol"
              colorScheme="brand"
              checked={protocol === "all"}
              onChange={protocolHandler}
              value="all"
            >
              All
            </Radio>
            <Radio
              size="md"
              name="protocol"
              colorScheme="brand"
              value="https"
              onChange={protocolHandler}
            >
              HTTPS
            </Radio>
            <Radio
              size="md"
              name="protocol"
              value="no_https"
              colorScheme="brand"
              onChange={protocolHandler}
            >
              HTTP
            </Radio>
          </Stack>
        </RadioGroup>
      </Stack>

      <Stack>
        <Text color="subtext" fontWeight={700}>
          Cross-Origin Resource Sharing
        </Text>
        <RadioGroup value={cors as string}>
          <Stack>
            <Radio
              size="md"
              name="cors"
              colorScheme="brand"
              checked={cors === "all"}
              onChange={corsHandler}
              value="all"
            >
              All
            </Radio>
            <Radio
              size="md"
              name="cors"
              colorScheme="brand"
              value="cors"
              onChange={corsHandler}
            >
              Cors
            </Radio>
            <Radio
              size="md"
              name="cors"
              value="no_cors"
              colorScheme="brand"
              onChange={corsHandler}
            >
              No Cors
            </Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </Stack>
  );
};

export default Filters;
