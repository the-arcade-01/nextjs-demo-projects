import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>HomePge</h1>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/team">Team</Link>
        <Link href="/code/repos">Codes</Link>
      </ul>
    </div>
  );
};

export default Header;
