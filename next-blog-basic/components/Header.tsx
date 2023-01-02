import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div>
      <Link href="/">Feed</Link>
    </div>
  );

  let right = null;

  if (status === "loading") {
    left = (
      <div>
        <Link href="/">Feed</Link>
      </div>
    );
    right = (
      <div>
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div>
        <Link href="/api/auth/signin">Log In</Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div>
        <Link href="/">Feed</Link>
        <Link href="/drafts">My drafts</Link>
      </div>
    );
    right = (
      <div>
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Link href="/create">
          <button>New Post</button>
        </Link>
        <button onClick={() => signOut}>Log out</button>
      </div>
    );
  }
  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Header;
