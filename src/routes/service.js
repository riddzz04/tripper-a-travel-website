import React ,{ useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth';

import Inputcontrol from "../components/inputcontrol";
import {auth} from "../../src/firebase"

import "./servicestyles.css";

import Signup from "../components/Signup";

import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";

import Trip from "../components/trip";



function Service(){
    const navigate=useNavigate();
    
    const[email,setemail]=useState("");
    const[pass,setpass]=useState("");

    const [error,seterror]=useState("");

    const [disable,setdisable]=useState(false);

    const handleSubmission=()=>{
        if(!email||!pass){
            seterror("Fill all fields");
            return;
        }
        seterror("");

        setdisable(true);

        signInWithEmailAndPassword(auth,email,pass)
        .then(async(res) => 
        {
            setdisable(false);

            navigate('/trip');
        })
        
            
        .catch((err)=>
        {
        setdisable(false);
        seterror(err.message);
        }
        );
    }
    
    return(
        <>
        
        <div className="container">
            <div className="innerbox">
                <h1>LOGIN</h1>
                <a className="back" href="/">Back to Home</a>
                <Inputcontrol 
                    label="Email:" 
                    placeholder="Enter email Here"
                    onChange={(event)=>setemail(event.target.value)
                    }
                />
                <Inputcontrol 
                    label="Passsword:"
                    placeholder="Enter your password"
                    onChange={(event)=>setpass(event.target.value)
                    }
                />
                <div className="loginfooter">
                    <b className="error">{error}</b>
                    <button disabled={disable} onClick={handleSubmission}>Log In</button>
                    <p>Don't have a account?{" "}
                    <span>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </span>
                    </p>
                </div>
            </div>
        </div>
        </>

    )
}
export default Service;