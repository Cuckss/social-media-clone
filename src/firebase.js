// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,getDoc,doc,setDoc} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw9l_4rWxyvOVZTFBPH-R1uilTBrdvSo8",
  authDomain: "ecomm-dec.firebaseapp.com",
  projectId: "ecomm-dec",
  storageBucket: "ecomm-dec.appspot.com",
  messagingSenderId: "799220968191",
  appId: "1:799220968191:web:1def9501150a6762f03aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const imageDb=getStorage(app);

export {db,auth,provider,doc,setDoc,imageDb}