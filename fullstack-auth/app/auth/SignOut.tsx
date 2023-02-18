"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  image: string;
};

const SignOut = ({ image }: User) => {
  return (
    <li className="flex items-center justify-center gap-2">
      <button
        className="bg-blue-400 rounded-md px-4 py-2 text-white font-medium"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      <Link href={"/dashboard"}>
        <Image width={64} height={64} src={image} alt="image" />
      </Link>
    </li>
  );
};

export default SignOut;
