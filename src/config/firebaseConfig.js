import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyCtIj6t-ZTQa9Cxb1vEFGfb2JaMiHnm4fc",
  authDomain: "react-redux-meetingplan-app.firebaseapp.com",
  databaseURL: "https://react-redux-meetingplan-app.firebaseio.com",
  projectId: "react-redux-meetingplan-app",
  storageBucket: "react-redux-meetingplan-app.appspot.com",
  messagingSenderId: "911150983234",
  appId: "1:911150983234:web:21aac3a372b9c3b70c25db",
  measurementId: "G-7NP8SWRGCF"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;