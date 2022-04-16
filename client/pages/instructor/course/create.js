import {useState, useEffect} from "react";
import axios from 'axios';
import InstructorRoute from "../../../components/routes/instructorRoute";
//import {Select, Button} from 'antd';
//import { SaveOutlined } from "@ant-design/icons";
import CourseCreateForm from "../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import { Router } from "next/router";
import {useRouter} from 'next/router';


const CourseCreate = () => {
    //state
    const [values, setValues]= useState({
        name:'',
        description:'',
        price:'',
        uploading: false,
        paid: true,
        loading: false,
        imagePreview: '',
        category: ""
    });

    const [preview, setPreview]= useState('');
    const [image, setImage] = useState("");
    const router = useRouter();

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value});
    };
    
    const handleImage = (e) => {
        let file = e.target.files[0];
        setPreview(window.URL.createObjectURL(file));
        setValues({ ...values, loading: true});
        //Resizing the image
        Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
            try{
                let {data}= await axios.post("/api/course/upload-image", {
                    image: uri,

                });
                console.log("image uploaded", data);

                // setting image in the state 
                
                setValues({ ...values, loading: false});
            }catch(err){
                console.log(err);
                setValues({ ...values, loading: false});
                toast.error('image upload failed! try again.');
            }
        });
    };

    const handleSubmit = async (e) => {
       try{ e.preventDefault();
        console.log(values);
        const {data} = await axios.post('/api/course',{ ...values, /*image*/});
        toast.success("now you can start adding lessons");
        router.push('/instructor');
        //console.log(data);
        }catch(err){
            console.log(err);
            toast.error("Failed to save the course! Try again.");
        }

    };

    return (
        <InstructorRoute>
            <h1 className="jumbotron text-center square">Create Course</h1>
            <div className="pt-3 pb-3">
            <CourseCreateForm
            handleSubmit={handleSubmit}
            handleImage={handleImage}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            preview={preview}
            />
            </div>

        </InstructorRoute>
    );

};

export default CourseCreate;