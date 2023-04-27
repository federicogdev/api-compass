import { useRouter } from "next/router";
import { ChangeEvent } from "react";

interface SearchFilter {
  type?: string;
  protocol?: string;
  cors?: string;
  auth?: string;
  page?: number;
}

const useSearchFilters = () => {
  const router = useRouter();

  const {
    query,
    type = "all",
    protocol = "all",
    cors = "all",
    auth = "all",
    page = 1,
  } = router.query;

  const filterSearch = ({ type, protocol, cors, auth, page }: SearchFilter) => {
    const { query } = router;

    if (page) query.page = page.toString();

    if (type) query.type = type;
    if (protocol) query.protocol = protocol;
    if (cors) query.cors = cors;
    if (auth) query.auth = auth;

    router.push(
      {
        pathname: router.pathname,
        query: query,
      }
      // undefined,
      // { shallow: true }
    );
  };

  const typeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    filterSearch({ type: e.target.value });
  };
  const authHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    filterSearch({ auth: e.target.value });
  };

  const protocolHandler = (e: ChangeEvent<HTMLInputElement>) => {
    filterSearch({ protocol: e.target.value });
  };

  const corsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    filterSearch({ cors: e.target.value });
  };

  const pageHandler = (page: number) => {
    filterSearch({ page });
  };

  return {
    filterSearch,
    typeHandler,
    authHandler,
    protocolHandler,
    corsHandler,
    query,
    type,
    protocol,
    cors,
    auth,
    page,
    pageHandler,
  };
};

export default useSearchFilters;
