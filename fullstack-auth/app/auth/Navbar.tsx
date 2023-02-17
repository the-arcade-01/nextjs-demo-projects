import Link from "next/link";
import Login from "./Login";
import SignOut from "./SignOut";

import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <nav>
      <Link href={"/"}>
        <h1>Post</h1>
      </Link>
      <ul>
        {!session?.user && <Login />}
        {session?.user && <SignOut image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
};

export default Navbar;
