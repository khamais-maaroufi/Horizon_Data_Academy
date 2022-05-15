import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Badge } from "antd";
import { Avatar, List, Button } from "antd";
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
import { Context } from "../../context";
import { toast } from "react-toastify";

const SingleCourse = () => {
  const { state } = useContext(Context);
  const { user } = state;
  const router = useRouter();
  const { slug } = router.query;
  const [course, setCourse] = useState({});
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});

  const checkEnrollement = async () => {
    const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
    setEnrolled(data);
    console.log("check enrollement", data);
  };

  useEffect(() => {
    //
    if (user && course) checkEnrollement();
  }, [user, course]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await axios.get(`/api/course/${slug}`);
        setCourse(data);
        setName(data.instructor.name);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourse();
  }, []);

  const handlePaidEnrollment = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/paid-enrollment/${course._id}`);
      console.log("handle free", data);
      toast.success(
        "Enrolled Successfully, Now you should pay for your course before attending to the first lesson in Horizon Data local Center"
      );
      setLoading(false);
    } catch (err) {
      toast.error("Failed to enroll! Try Later");
      console.log(err);
      setLoading(false);
    }
  };

  const handleFreeEnrollment = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
      console.log("handle free", data);
      toast.success(
        "Enrolled Successfully You can attend to your Course in Horizon Data Local Center for free"
      );
      setLoading(false);
    } catch (err) {
      toast.error("Failed to enroll! Try Later");
      console.log(err);
      setLoading(false);
    }
  };

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
                  {loading ? (
                    <div className="d-flex justify-content-center">
                      <LoadingOutlined className="h1 text-center" />
                    </div>
                  ) : (
                    <Button
                      className="mb-3 mt-3"
                      type="primary"
                      block
                      shape="round"
                      icon={<SafetyOutlined />}
                      size="large"
                      disabled={loading || enrolled.status || !user}
                      onClick={
                        course.paid
                          ? handlePaidEnrollment
                          : handleFreeEnrollment
                      }
                    >
                      {user
                        ? enrolled.status
                          ? "Enrolled Successfully"
                          : "Enroll Now"
                        : "Login to enroll"}
                    </Button>
                  )}
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
