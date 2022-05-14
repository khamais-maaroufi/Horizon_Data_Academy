import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";

const index = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/courses");
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <>
      <h1 className="jumbotron text-center bg-primary">Horizon Data Academy</h1>
      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
