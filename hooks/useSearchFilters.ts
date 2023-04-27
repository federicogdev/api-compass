import { useRouter } from "next/router";
import { ChangeEvent } from "react";

interface SearchFilter {
  paid?: string;
  https?: string;
  cors?: string;
  auth?: string;
  page?: number;
}

const useSearchFilters = () => {
  const router = useRouter();

  const {
    query,
    paid = "all",
    https = "all",
    cors = "all",
    auth = "all",
    page = 1,
  } = router.query;

  const filterSearch = ({ paid, https, cors, auth, page }: SearchFilter) => {
    const { query } = router;

    if (page) query.page = page.toString();

    if (paid) query.paid = paid;
    if (https) query.https = https;
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

  const paidHandler = (e: ChangeEvent<HTMLInputElement>) => {
    filterSearch({ paid: e.target.value });
  };
  const authHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    filterSearch({ auth: e.target.value });
  };

  const httpsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    filterSearch({ https: e.target.value });
  };

  const corsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    filterSearch({ cors: e.target.value });
  };

  const pageHandler = (page: number) => {
    filterSearch({ page });
  };

  return {
    filterSearch,
    paidHandler,
    authHandler,
    httpsHandler,
    corsHandler,
    query,
    paid,
    https,
    cors,
    auth,
    page,
    pageHandler,
  };
};

export default useSearchFilters;
