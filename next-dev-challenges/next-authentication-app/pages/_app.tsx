import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";

const rubik = Rubik({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  );
}
