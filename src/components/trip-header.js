import React, { useState , useEffect} from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./trip-headerstyles.css"
function Tripheader()
{
    const navigate=useNavigate();

    const[userName,setUserName]=useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayName);
            }
            else setUserName("");
        });
    },[]);
    const clickLogout = () => {
        
        signOut(auth);
        navigate('/');
        localStorage.clear();
    };
    const clickSummary = () => {
        
        navigate('/summary');
    };
    return(
        <>
        <div className="trip-header">
            <h1>Welcome,{userName}</h1>
            <div>
            <button onClick={clickSummary}>
                Your Trips
            </button>
            <button onClick={clickLogout}>
                Log Out
            </button>
            </div>
        </div>
        </>

    )
}
export default Tripheader;