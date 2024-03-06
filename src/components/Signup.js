import React ,{ useState } from "react";
import Inputcontrol from "../components/inputcontrol";
import Trip from "../components/trip";
import "../routes/servicestyles.css";
import { Link ,useNavigate} from "react-router-dom";
import Service from "../routes/service";
import {auth} from "../../src/firebase"
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import {createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';

function Signup(){
    const navigate=useNavigate();
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[pass,setpass]=useState("");
    const [error,seterror]=useState("");
    const [disable,setdisable]=useState(false);
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPass = pass.trim();
    const handleSubmission=()=>{
        if(!trimmedName||!trimmedName||!trimmedPass){
            seterror("Fill all fields");
            return;
        }
        seterror("");
        setdisable(true);
        createUserWithEmailAndPassword(auth,email,pass)
        .then(async(res) => 
        {
            setdisable(false);
            const user = res.user;
            await updateProfile(user,{displayName:name});
            navigate('/trip');
        })
        
            
        .catch((err)=>
        {
        setdisable(false);
        console.log("Error:",err);
        seterror(err.message);
        }
        );
    }
    
    return(
        <>
        <div className="container">
            <div className="innerbox">
                
                <h1>SIGN UP</h1>
                <a className="back" href="/">Back to Home</a>

                <Inputcontrol 
                    label="Name:" 
                    placeholder="Enter your name"
                    onChange={(event)=>setname(event.target.value)
                    }
                />
                <Inputcontrol 
                    label="Email:"
                    placeholder="Enter email Here"
                    onChange={(event)=>setemail(event.target.value)
                    }
                    
                />
                <Inputcontrol 
                    label="Passsword:" 
                    placeholder="Enter password"
                    onChange={(event)=>setpass(event.target.value)
                    }
                />
                <div className="loginfooter">
                    <b className="error">{error}</b>
                    <button onClick={handleSubmission}
                    disabled={disable}>Signup</button>
                    <p>Already have a account?{" "}
                    <span>
                        <Link to="/service">
                            Log In
                        </Link>
                    </span>
                    </p>
                </div>
            </div>
        </div>
        </>

    )
}
export default Signup;