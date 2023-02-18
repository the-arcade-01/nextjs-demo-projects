import Link from "next/link";
import Login from "./Login";
import SignOut from "./SignOut";

import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <nav className="flex justify-between items-center my-4">
      <Link href={"/"}>
        <h1 className="font-bold text-xl">Post</h1>
      </Link>
      <ul>
        {!session?.user && <Login />}
        {session?.user && <SignOut image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
};

export default Navbar;
