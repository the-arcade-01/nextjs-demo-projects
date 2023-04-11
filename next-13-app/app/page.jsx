"use client";

import { useState, useEffect } from "react";
import Loading from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch(`/api/courses`);
      const data = await res.json();
      setCourses(data);
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Website</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
