import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

const search = (searchTerm: string) => {
  const search = [
    { searchId: 1, search: "Nothing good, all bad" },
    { searchId: 2, search: "Everthing bad, all good" },
  ];
  return search;
};

const SearchResults = ({ params: { searchTerm } }: PageProps) => {
  const searchResults = search(searchTerm);
  return (
    <div>
      {searchResults.map((search) => (
        <div key={search.searchId}>
          {search.searchId}. {search.search}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
