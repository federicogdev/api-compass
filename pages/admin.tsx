import React from "react";
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
interface Props {}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session || session?.user.role !== "admin") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const AdminPage = (props: Props) => {
  return <div>AdminPage</div>;
};

export default AdminPage;
