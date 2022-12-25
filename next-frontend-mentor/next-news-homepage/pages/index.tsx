import { Inter } from "@next/font/google";
import Cards from "../components/Cards";
import Header from "../components/Header";
import News from "../components/News";
import Showcase from "../components/Showcase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      {/* <Showcase /> */}
      <News />
      <Cards />
    </>
  );
}
