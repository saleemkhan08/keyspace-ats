import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzRyptCKNybRhY0aTCTUbyfl_DPEf_GdU",
  authDomain: "keyspace-2020.firebaseapp.com",
  databaseURL: "https://keyspace-2020.firebaseio.com",
  projectId: "keyspace-2020",
  storageBucket: "keyspace-2020.appspot.com",
  messagingSenderId: "558633008183",
  appId: "1:558633008183:web:9b26b47f39babf43fa93b2",
  measurementId: "G-68BLJGV8NW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
