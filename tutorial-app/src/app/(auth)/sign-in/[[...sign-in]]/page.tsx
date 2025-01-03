import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;

/*
Notes:
To customize the Sign in and Sign up pages instead of clerk default page
we use this, this also opens the clerk auth page in our app path 
 */
