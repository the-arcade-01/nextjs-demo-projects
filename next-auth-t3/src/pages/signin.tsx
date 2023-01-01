import { type NextPage, GetServerSideProps } from "next";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { AppProps } from "next/app";

import { trpc } from "../utils/trpc";

const SignIn = ({ providers }: { providers: AppProps }) => {
  return (
    <div>
      <h1>Sign in</h1>
      <div>
        {Object.values(providers).map((provider) => (
          <button
            key={provider.id}
            onClick={() =>
              signIn(provider.id, { callbackUrl: `${window.location.origin}` })
            }
          >
            Sign in with Google
          </button>
        ))}
      </div>
    </div>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
