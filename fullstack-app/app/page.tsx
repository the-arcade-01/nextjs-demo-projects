import Link from "next/link";
import Form from "./Form";

const getPosts = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
};

const Home = async () => {
  const data: { id: number; title: string }[] = await getPosts();
  return (
    <main className="py-4 px-48">
      <Link
        href={"/dashboard"}
        className="bg-teal-500 text-white font-nedium py-2 px-4 rounded-md"
      >
        Go to the dashboard
      </Link>
      <Form />
      {data.map((post) => (
        <h1 className="text-lg py-2" key={post.id}>
          {post.title}
        </h1>
      ))}
    </main>
  );
};

export default Home;
