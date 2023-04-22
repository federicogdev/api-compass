import { Input, Button, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

interface Props {}

const SearchBar = (props: Props) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const submitHandler = (e: any) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  return (
    <VStack as="form" onSubmit={submitHandler} gap={5}>
      <Input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Sports, Food, AI, Machine Learning....."
        focusBorderColor="brand.700"
      />
      <Button type="submit" bg="brand.700">
        Search
      </Button>
    </VStack>
  );
};

export default SearchBar;
