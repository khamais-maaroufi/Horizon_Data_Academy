import { useState, useEffect } from "react";
import InstructorRoute from "../../../../components/routes/instructorRoute";
import { useRouter } from "next/router";
import axios from "axios";
import { Avatar, Tooltip, Button, Modal, List } from "antd";
import { EditOutlined, CheckOutlined, UploadOutlined } from "@ant-design/icons";
import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";

const CourseView = () => {
  const [course, setCourse] = useState({});

  // state for lesson
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    start_date: null,
    time: null,
  });
  const [uploading, setUploading] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  // function for add lesson

  const handleAddLesson = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const { data } = await axios.post(
        `/api/course/lesson/${slug}/${course.instructor._id}`,
        values
      );
      console.log("server response update: ", data);
      setValues({
        ...values,
        title: "",
        content: "",
        start_date: null,
        time: null,
      });
      setVisible(false);
      setCourse(data);
      toast.success("Lesson was added successfully.");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add Lesson! Try later");
    }
  };

  useEffect(() => {
    loadCourse(course);
  }, [slug]);

  return (
    <InstructorRoute>
      <div className="container-fluid pt-3 pb-3">
        {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
        {course && (
          <div className="container-fluid pt1 pb-3">
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
                    <h5 className="mg-2 text-primary">{course.name}</h5>
                    <p style={{ marginTop: "10px" }}>
                      {course.lessons && course.lessons.length} Lessons
                    </p>
                    <p style={{ marginTop: "15px", fontSize: "10px" }}>
                      {course.category}
                    </p>
                  </div>

                  <div className="d-flex col">
                    <Tooltip title="Edit">
                      <EditOutlined className="h5 pointer text-warning" />
                    </Tooltip>
                    <Tooltip title="Check">
                      <CheckOutlined className="h5 pointer text-danger " />
                    </Tooltip>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <ReactMarkdown children={course.description} />
                </div>
              </div>

              <div className="row">
                <Button
                  className="col-md-6 offset-md-3 text-center"
                  type="primary"
                  shape="round"
                  icon={<UploadOutlined />}
                  size="large"
                  onClick={() => setVisible(true)}
                >
                  Add Lesson
                </Button>
              </div>

              <Modal
                title="+ Add lessons"
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
              >
                <AddLessonForm
                  values={values}
                  setValues={setValues}
                  handleAddLesson={handleAddLesson}
                  uploading={uploading}
                />
              </Modal>

              <div className="row pb-5">
                <div className="col lesson-list">
                  <h4>
                    {course && course.lessons && course.lessons.legth} Lessons
                    Created
                  </h4>

                  <List
                    itemLayout="horizontal"
                    dataSource={course && course.lessons}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar>{index + 1}</Avatar>}
                          title={item.title}
                        ></List.Item.Meta>
                      </List.Item>
                    )}
                  ></List>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
