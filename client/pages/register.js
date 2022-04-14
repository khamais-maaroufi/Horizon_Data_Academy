import {useState, useContext, useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import {Context} from "../context";
import {useRouter} from 'next/router';

const register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [CIN, setCin] = useState('');

    const router = useRouter();
    const {state} = useContext(Context);
    const {user} = state;
    useEffect(() => {
        if (user !== null) router.push('/');}
    , [user] );


    const handleSubmit = async (e) => {
       
        e.preventDefault();
        try{
            setLoading(true);
            //  console.table({name, email, password});
            const {data} = await axios.post('/api/register',
             {name, email, password, CIN});
            //console.log("REGISTER RESPONSE", data);
            toast.success("Welcome to Horizon Data Academy, You can login now.");
            setLoading(false);
        }catch(err){
            //toast.error(err.response.data);
            toast.error("retry entering your data");
            setLoading(false);
        }
    };
    return (
        <>
        <h1 className="jumbotron text-center bg-primary square">Register</h1>
            
            <h1>
                <div className="container col-md-4 offset-md-4 pb-5">
                    <form onSubmit={handleSubmit} >
                    <input type="text" className="form-control mb-4 p-4" value={name}
                        onChange={(e) => setName(e.target.value)}  placeholder="Enter your Name" required/>
                    <input type="emailt" className="form-control mb-4 p-4" value={email}
                        onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your Email" required/>
                    <input type="password" className="form-control mb-4 p-4" value={password}
                        onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" required/>
                    <input type="text" className="form-control mb-4 p-4" value={CIN}
                        onChange={(e) => setCin(e.target.value)}  placeholder="Enter your CIN" required/>
                    <button type="submit" /*className="btn btn-block btn-primary"*/ className="btn btn-primary w-100" 
                    disabled ={!name || !password || !email|| loading} >
                        {loading ? <SyncOutlined spin /> : "Submit"}
                    </button>
                    </form>    
                    <p className="text-center p3">
                        <h6>
                        Already registered?{" "}
                        <Link href="/login"><a>Login</a></Link>
                        </h6>
                    </p>    
                    
                </div>
            </h1>
        </>
    )
};

export default register;