async function fetchRepo(name) {
  const res = await fetch(
    `https://api.github.com/repos/the-arcade-01/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await res.json();

  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    </div>
  );
};

export default Repo;
