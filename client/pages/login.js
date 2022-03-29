import {useState, useContext} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import {Context} from "../context";
import {useRouter} from 'next/router';

const login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    //state
    const {state, dispatch} = useContext(Context);
    //console.log("STATE", state);
    
    const router = useRouter();


    const handleSubmit = async (e) => {
       
        e.preventDefault();
        try{
            setLoading(true);
            //  console.table({name, email, password});
            const {data} = await axios.post('/api/login',
             {email, password});
            //console.log("REGISTER RESPONSE", data);
           dispatch({type: "LOGIN", payload: data});
            //save in local storage
            window.localStorage.setItem('user', JSON.stringify(data));
            router.push("/");
            toast.success("Welcome to Horizon Data Academy.");
            setLoading(false);
        }catch(err){
            toast.error(err.response.data);
            setLoading(false);
        }
    };
    return (
        <>
        <h1 className="jumbotron text-center bg-primary square">Register</h1>
            
            <h1>
                <div className="container col-md-4 offset-md-4 pb-5">
                    <form onSubmit={handleSubmit} >
                    <input type="emailt" className="form-control mb-4 p-4" value={email}
                        onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your Email" required/>
                    <input type="password" className="form-control mb-4 p-4" value={password}
                        onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" required/>
                       
                    <button type="submit" /*className="btn btn-block btn-primary"*/ className="btn btn-primary w-100" 
                    disabled ={!password || !email|| loading} >
                        {loading ? <SyncOutlined spin /> : "Submit"}
                    </button>
                    </form>    
                    <p className="text-center p3">
                        <h6>
                        Not yet registered?{" "}
                        <Link href="/register"><a>Register</a></Link>
                        </h6>
                    </p>    
                    
                </div>
            </h1>
        </>
    )
};

export default login;