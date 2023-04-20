import React from "react";
import { useSession } from "next-auth/react";

interface Props {}

const Home = (props: Props) => {
  const { status, data: session } = useSession();

  return <div>{JSON.stringify(session)}</div>;
};

export default Home;
