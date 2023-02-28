import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 bg-blue-400 flex items-center gap-4">
      <Link
        href="/"
        className="rounded-lg bg-white px-2 py-1 text-blue-400 text-lg font-medium"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="rounded-lg bg-white px-2 py-1 text-blue-400 text-lg font-medium"
      >
        Todos
      </Link>
    </div>
  );
};

export default Header;
