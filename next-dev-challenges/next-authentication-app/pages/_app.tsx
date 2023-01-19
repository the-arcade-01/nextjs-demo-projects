import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import Navbar from "@/components/Navbar";

import { SessionProvider } from "next-auth/react";

const rubik = Rubik({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={rubik.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
