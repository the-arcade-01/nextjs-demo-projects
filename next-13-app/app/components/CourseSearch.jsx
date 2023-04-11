"use client";

import { useState } from "react";

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search course..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default CourseSearch;
