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

const Filters = (props: Props) => {
  const {
    authHandler,
    corsHandler,
    filterSearch,
    httpsHandler,
    paidHandler,
    auth,
    cors,
    page,
    https,
    query,
    paid,
  } = useSearchFilters();
  const router = useRouter();

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
        <Text
          onClick={() => router.push(`/search?query=${query}`)}
          cursor="pointer"
        >
          Clear all
        </Text>
      </Flex>

      <Divider />

      <Text fontWeight={700}>Results: 0</Text>

      <Stack>
        <Text color="subtext" fontWeight={700}>
          Type
        </Text>
        <RadioGroup value={paid as string}>
          <Stack>
            <Radio
              size="md"
              name="paid"
              colorScheme="brand"
              checked={paid === "all"}
              onChange={paidHandler}
              value="all"
            >
              All
            </Radio>
            <Radio
              size="md"
              name="paid"
              color="red.700"
              value="free"
              onChange={paidHandler}
            >
              Free
            </Radio>

            <Radio
              size="md"
              name="paid"
              colorScheme="brand"
              value="subscription"
              onChange={paidHandler}
            >
              Subscription
            </Radio>
            <Radio
              size="md"
              name="paid"
              value="paid"
              colorScheme="brand"
              onChange={paidHandler}
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
          <option value="o_auth">OAuth</option>
          <option value="user_agent">User Agent</option>
          <option value="x_mashape_key">Mashape Key</option>
          <option value="none">No Auth</option>
        </Select>
      </Stack>

      <Stack>
        <Text color="subtext" fontWeight={700}>
          Protocol
        </Text>
        <RadioGroup value={https as string}>
          <Stack>
            <Radio
              size="md"
              name="https"
              colorScheme="brand"
              checked={https === "all"}
              onChange={httpsHandler}
              value="all"
            >
              All
            </Radio>
            <Radio
              size="md"
              name="https"
              colorScheme="brand"
              value="https"
              onChange={httpsHandler}
            >
              HTTPS
            </Radio>
            <Radio
              size="md"
              name="https"
              value="no_https"
              colorScheme="brand"
              onChange={httpsHandler}
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
