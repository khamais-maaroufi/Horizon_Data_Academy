import AdminRoute from "../../../../components/routes/AdminRoute";
import { useState, useEffect } from "react";
import { Router } from "next/router";
import { useRouter } from "next/router";
import axios from "axios";
import { Avatar, Tooltip, Button, Modal, List } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  UploadOutlined,
  QuestionCircleOutlined,
  CloseCircleOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";

const Adminview = () => {
  const [course, setCourse] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/Admin-course/${slug}`);
    setCourse(data);
    console.log(data);
  };

  useEffect(() => {
    loadCourse(course);
  }, [slug]);

  const handleValidate = async (index) => {
    const answer = window.confirm(
      "Are you sure you're going to Validate Enrollment for that student?"
    );
    if (!answer) return;
    let allstudents = course.PreEnrolled_list;
    const removed = allstudents.splice(index, 1);
    setCourse({ ...course, PreEnrolled_list: allstudents });
    console.log(removed[0]._id);
    try {
      const { data } = await axios.put(
        `/api/Admin-course/${slug}/${removed[0]._id}`
      );
      console.log("Student is enrolled ===>", data);
      toast.success("Gratulaion The Student is Successfully Updated!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminRoute>
      <div className="container-fluid pt-3 pb-3">
        {course && (
          <div className="container-fluid pt1 pb-3">
            <div className="media pt-2">
              <Avatar
                size={300}
                shape="square"
                src={
                  course.image
                    ? course.image
                    : "https://media.istockphoto.com/vectors/vector-illustration-online-education-or-elearning-concept-vector-id1212272730?k=20&m=1212272730&s=612x612&w=0&h=LChXtmzoxyOGm1zJtZALofThZuiwJG_arYkTkoIhL4I="
                }
              />
              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <h5 className="mg-2 text-primary">{course.name}</h5>
                    {course.instructor && (
                      <h5 className="mg-2 " style={{ marginTop: "10px" }}>
                        Created by {course.instructor.name}
                      </h5>
                    )}
                    <p style={{ marginTop: "10px" }}>
                      {course.lessons && course.lessons.length} Lessons
                    </p>
                    <p style={{ marginTop: "15px", fontSize: "10px" }}>
                      {course.category}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <ReactMarkdown children={course.description} />
                  </div>
                </div>

                <div className="row pb-5">
                  <div className="col lesson-list">
                    <h4>
                      {course &&
                        course.PreEnrolled_list &&
                        course.PreEnrolled_list.length}{" "}
                      Students await for Validation to Enroll
                    </h4>

                    <List
                      itemLayout="horizontal"
                      dataSource={course && course.PreEnrolled_list}
                      renderItem={(item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar>{index + 1}</Avatar>}
                            title={item.name}
                          ></List.Item.Meta>
                          <CheckOutlined
                            style={{ fontSize: "300%" }}
                            title="click to Validate Enrollment"
                            onClick={() => handleValidate(index)}
                            className="text-danger"
                          />
                        </List.Item>
                      )}
                    ></List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminRoute>
  );
};

export default Adminview;
