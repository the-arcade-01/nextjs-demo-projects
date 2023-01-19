import Profile from "@/components/Profile";
import { getSession } from "next-auth/react";

const Home = () => {
  return (
    <>
      <Profile />
    </>
  );
};
export default Home;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/Login",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
