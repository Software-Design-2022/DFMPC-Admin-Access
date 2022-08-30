import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { assert } from 'console'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, collection, query, getFirestore} from "firebase/firestore";
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


const html = fs.readFileSync(path.resolve(__dirname, './add_protocols.html'), 'utf8');


const protocol_name = "Test Protocol";
const protocol_description = "This is a test protocol";
const add = require('./HelperFunctions.js');

async function check () {
    await add.addProtocols(protocol_name, protocol_description);
    const q = query(collection(db, "emergency_protocols").where("protocol_name", "==", protocol_name));
    const protocols = await getDocs(q);
    protocols.forEach((doc) => {
        expect(doc.data().protocol_name).toBe("Test Protocol");
        expect(doc.data().protocol_1).toBe("This is a test protocol");
    });
}
describe('HelperFunctions.js', () => {
    it('saves protocol data to firebase', () => {
        check();
    })
})