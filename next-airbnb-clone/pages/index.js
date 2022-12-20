import Head from "next/Head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Banner from "../components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>next-airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main */}

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Explore data */}
          {exploreData?.map((item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
};
