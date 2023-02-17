"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <li>
      <button
        onClick={() => signIn()}
        className="px-4 py-2 bg-blue-400 rounded-md text-white font-medium"
      >
        Sign In
      </button>
    </li>
  );
};

export default Login;
