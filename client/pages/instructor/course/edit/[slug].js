import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../../../components/routes/instructorRoute";
//import {Select, Button} from 'antd';
//import { SaveOutlined } from "@ant-design/icons";
import CourseCreateForm from "../../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { Avatar, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const CourseEdit = () => {
  //state
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    uploading: false,
    paid: true,
    loading: false,
    imagePreview: "",
    category: "",
    lessons: [],
  });

  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setValues(data);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setValues({ ...values, loading: true });
    //Resizing the image
    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("image uploaded", data);

        // setting image in the state
        setImage(data);
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast.error("image upload failed! try again.");
      }
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(values);
      const { data } = await axios.put(`/api/course/${slug}`, {
        ...values,
        image,
      });
      toast.success("The course is updated successfully");
      //router.push("/instructor");
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to update the course! Try again.");
    }
  };

  const handleDelete = async (index) => {
    const answer = window.confirm(
      "Are you sure you're going to Delete that Lesson?"
    );
    if (!answer) return;
    let allLessons = values.lessons;
    const removed = allLessons.splice(index, 1);
    setValues({ ...values, lessons: allLessons });
    console.log(removed[0]._id);
    const { data } = await axios.put(`/api/course/${slug}/${removed[0]._id}`);
    console.log("deleted lesson ===>", data);
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center square">Edit Course</h1>
      <div className="pt-3 pb-3">
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          editPage={true}
        />
      </div>

      <div className="row pb-5">
        <div className="col lesson-list">
          <h4>{values && values.lessons && values.lessons.length} Lessons</h4>
          <hr />
          <List
            itemLayout="horizontal"
            dataSource={values && values.lessons}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar>{index + 1}</Avatar>}
                  title={item.title}
                ></List.Item.Meta>
                <DeleteOutlined
                  spin={true}
                  title="delete"
                  onClick={() => handleDelete(index)}
                  className="text-danger"
                />
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    </InstructorRoute>
  );
};

export default CourseEdit;
