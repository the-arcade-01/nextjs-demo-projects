import { useSession, signIn, signOut } from "next-auth/react";
const Login = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <h1>Please sign in :)</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
  return (
    <>
      <h1>
        Signed as {session.user?.name} {session.user?.email}
      </h1>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Login;
