import TodosInput from "@/components/TodosInput";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-10">
      <h1 className="font-semibold text-2xl">Todos</h1>
      <TodosInput />
    </div>
  );
}
