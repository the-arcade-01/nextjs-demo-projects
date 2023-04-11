import Link from "next/link";

async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/the-arcade-01/repos", {
    next: {
      revalidate: 60,
    },
  });
  const repos = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
