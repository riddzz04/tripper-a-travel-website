// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZmhx8gyh5UO4HYN6G9v7b7GcW8drj028",
  authDomain: "authenticate-49448.firebaseapp.com",
  databaseURL:'https://authenticate-49448-default-rtdb.firebaseio.com/',
  projectId: "authenticate-49448",
  storageBucket: "authenticate-49448.appspot.com",
  messagingSenderId: "207358634959",
  appId: "1:207358634959:web:aa31f77a1b24fe622080ba",
  measurementId: "G-NEZ81E1PQK"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export{app,auth};
