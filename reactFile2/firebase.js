import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCdycug6u-VHA_cUOs7FMSbxOfg61HQI5o",
  authDomain: "haia-e8569.firebaseapp.com",
  databaseURL: "https://haia-e8569-default-rtdb.firebaseio.com",
  projectId: "haia-e8569",
  storageBucket: "haia-e8569.appspot.com",
  messagingSenderId: "118382392866",
  appId: "1:118382392866:web:be264ef5b90af815367c7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database=firebase.database();
export default database;