// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setDoc, doc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZVQZO8XWR0UTPoSMLrRN7nSltUDW9Xzs",
  authDomain: "dfmpc-student-placement-system.firebaseapp.com",
  databaseURL: "https://dfmpc-student-placement-system-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dfmpc-student-placement-system",
  storageBucket: "dfmpc-student-placement-system.appspot.com",
  messagingSenderId: "295214875936",
  appId: "1:295214875936:web:546dcdb4f822d1c4c84345",
  measurementId: "G-1JPG0HXVWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();



//File to store Functions used in HTML Files for testing purposes
function getEndDate(start, duration) //function in student_schedules.html that calculates end date based on start date and duration (weeks)
{
    duration = duration * 6.048* Math.pow(10,8);
    var startDate = Date.parse(start)
    var endDate = startDate + duration;
    var end = new Date(endDate).toISOString().split('T')[0];
    return end;
}

async function addProtocols(protocol_name, protocol_description) //function in add_protocols.html that adds protocols to firebase) {
{
    await setDoc(doc(db, "emergency_protocols", protocol_name), {
        protocol_name: protocol_name,
        protocol_1: protocol_description
        });
}

module.exports.getEndDate = getEndDate;
module.exports.addProtocols = addProtocols;