import AdminRoute from "../../components/routes/AdminRoute";
import { useState, useEffect } from "react";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const index = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("api/Admin-courses");
    setCourses(data);
  };

  return (
    <AdminRoute>
      <h1 className="jumbotron text-center bg-primary">
        Administrator Dashboard
      </h1>
      {courses &&
        courses.map((course) => (
          <>
            <div className="media pt-2">
              <Avatar
                size={80}
                src={
                  course.image
                    ? course.image
                    : "https://media.istockphoto.com/vectors/vector-illustration-online-education-or-elearning-concept-vector-id1212272730?k=20&m=1212272730&s=612x612&w=0&h=LChXtmzoxyOGm1zJtZALofThZuiwJG_arYkTkoIhL4I="
                }
              />
              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <Link
                      href={`/Admin/course/view/${course.slug}`}
                      className="pointer"
                    >
                      <a className="h5 mt-2 text-primary">{course.name}</a>
                    </Link>
                    <p style={{ marginTop: "30px" }}>
                      {course.PreEnrolled_list.length} Students are waiting for
                      validation untill now!
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      {course.lessons.length} Lessons
                    </p>

                    {course.lessons.length < 5 ? (
                      <p className="text-warning">
                        At least 5 Lessons are required to publish a course!
                      </p>
                    ) : course.published ? (
                      <p className="text-success">
                        This course is published in the market place.
                      </p>
                    ) : (
                      <p className="text-success">
                        This course is ready to be published.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </AdminRoute>
  );
};

export default index;
