import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import Footer from "../components/Footer/Footer";

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
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron bg-primary square">
            <div className="row">
              <div className="col-md-8">
                <h1 className="text-light font-weight-bold mt-3 pt-6">
                  Horizon Data Academy
                </h1>
              </div>
              <div className="col-md-4">
                <img
                  src="https://o.remove.bg/downloads/2da27ca5-5485-4b6d-b439-d3b972bac149/123660370_206683887573188_5816735759766621630_n-removebg-preview.png"
                  className="img img-fluid"
                  width="50%"
                  height="50%"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 pt-3">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        <div className="row mt-3 pt-3">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default index;
