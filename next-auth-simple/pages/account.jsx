import { useSession, signOut, getSession } from "next-auth/react";

const account = () => {
  const { data: session } = useSession(); // { required: true } - for client side redirecting to login

  if (session) {
    return (
      <div>
        <p>Welcome {session.user.name}</p>
      </div>
    );
  }
  return (
    <div>
      <p>Not signed in</p>
    </div>
  );
};

export default account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
