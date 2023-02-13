import Form from "./Form";
import Post from "./Post";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full py-6 gap-4">
      <h1 className="text-2xl font-medium">Upload Image</h1>
      <Form />
    </main>
  );
}
