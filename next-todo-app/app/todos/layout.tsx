import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div>{children}</div>
    </main>
  );
}
