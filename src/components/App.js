import React ,{useState,useEffect}from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../routes/home';
import Service from '../routes/service';
import Contact from '../routes/contact';
import About from '../routes/about';
import Signup from './Signup';
import Trip from './trip';
import SummaryPage from './SummaryPage';
import { Link } from 'react-router-dom';
import {auth} from "../../src/firebase"

function App() {
  const[link,setlink]=useState(<Service/>);
    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if(user){
                setlink(<Trip/>);
            }
            else setlink(<Service/>);
        });
    },[]);
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={link}/>
          <Route path="/contact" element={<Contact/>}/>\
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/trip" element={<Trip/>}/>
          <Route path="/summary" element={<SummaryPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
