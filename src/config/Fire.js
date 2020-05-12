
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAk8WkbjL_U69Y-rydQQyRPNRXUB52RANE",
    authDomain: "udemytoannguyen.firebaseapp.com",
    databaseURL: "https://udemytoannguyen.firebaseio.com",
    projectId: "udemytoannguyen",
    storageBucket: "udemytoannguyen.appspot.com",
    messagingSenderId: "942792072187",
    appId: "1:942792072187:web:05fc8f1b66a483ad94c95e",
    measurementId: "G-CHSBYG33V3"
  };
  // Initialize Firebase
   const fire =  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire ;