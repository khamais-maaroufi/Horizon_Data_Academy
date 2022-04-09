import axios from 'axios';
import {useState, useContext} from "react";
import {Context} from "../../context";
import { Button } from 'antd';
import {LoadingOutlined, SettingOutlined, UserSwitchOutlined}
from "@ant-design/icons";
import { toast } from 'react-toastify';
import UserRoute from "../../components/routes/UserRoute";

const becomeInstructor = () => {
    //state
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const {state: {user}} = useContext(Context);
    
    const becomeInstructor = () => {
        //console.log("we will redirect you to a forum");
        setLoading(true);
        axios.post("/api/make-instructor", {password}).then((res) =>{
            if (res.data === "y"){ 
                toast.error('Token is wrong retry again');
                setLoading(false);
            }else
            {
                toast.success("You are registred as an instructor successfully");
                setLoading(false);
                window.localStorage.setItem("user", JSON.stringify(res.data));
                window.location.href = "/instructor";
            }
            //window.location.href = res.data;
        })
        .catch((err) => {
            console.log(err.response.status);
            toast("setting up an instructor account Failed! Try agin.");
            setLoading(false);
        })
    };


    return (
        <>
            <h1 className="jumbotron text-center square">Become Instructor</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="pt-4">
                            <UserSwitchOutlined className="display-1 pb-3"/>
                            <br/>
                            <h2>Welcome to Horizon data Academy, you're our partner now.</h2>
                            <br/>
                            <input type="password" className="form-control mb-4 p-4" value={password}
                        onChange={(e) => setPassword(e.target.value)}  placeholder="Enter the Token" required/>
                       
                            <Button className="mb-3" type="primary" block-shape="round"
                            icon={loading ? <LoadingOutlined/> : <SettingOutlined/>} size="large"
                            onClick={becomeInstructor}
                            disabled={user && user.role && user.role.includes("instructor") || loading}>
                            {loading ? "Processing..." : "Subscribing Setup"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default becomeInstructor;