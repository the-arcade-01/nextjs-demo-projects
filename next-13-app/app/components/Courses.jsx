import Link from "next/link";

// async function fetchCourses() {
//   const res = await fetch("http://localhost:3000/api/courses");
//   const courses = await res.json();
//   return courses;
// }

const Courses = ({ courses }) => {
  // const courses = await fetchCourses();

  return (
    <div>
      <h2>Courses</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank">
            Go to Course{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
