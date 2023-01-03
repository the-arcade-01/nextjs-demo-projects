import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <h1>Please signin</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
