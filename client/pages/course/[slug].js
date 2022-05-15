import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Badge } from "antd";
import { Avatar, List } from "antd";

const SingleCourse = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [course, setCourse] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await axios.get(`/api/course/${slug}`);
        setCourse(data);
        console.log(data);
        setName(data.instructor.name);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourse();
  }, []);

  return (
    <>
      {course && (
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="jumbotron bg-primary square">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="text-light font-weight-bold">{course.name}</h1>
                  <p className="lead">
                    {course.description && course.description.substring(0, 160)}
                    ...
                  </p>
                  <p>Created by {name}</p>
                  <h4 className="pt-2 " style={{ color: "white" }}>
                    {course.paid ? course.price + " TND" : "For free"}
                  </h4>
                  <Badge
                    count={course.category}
                    style={{ backgroundColor: "#134b5f" }}
                    className="pb-2 mr-2"
                  />
                </div>
                <div className="col-md-4">
                  <img src={course.image} className="img img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ fontWeight: "bold", color: "red" }}>
            <h5>Lessons</h5>
          </div>
          <List
            itemLayout="horizontal"
            dataSource={course && course.lessons}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar>{index + 1}</Avatar>}
                  title={item.title}
                ></List.Item.Meta>
                <div>
                  <p>{item.content}</p>
                  <h5>{item.start_date}</h5>
                  <h5>{item.time}</h5>
                </div>
              </List.Item>
            )}
          ></List>
        </div>
      )}
    </>
  );
};

export default SingleCourse;
