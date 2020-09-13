import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAPtz-aCpGHtfZkQd-LmamXJcJ7f2R0aPM",
    authDomain: "react-98344.firebaseapp.com",
    databaseURL: "https://react-98344.firebaseio.com",
    projectId: "react-98344",
    storageBucket: "react-98344.appspot.com",
    messagingSenderId: "351407538301",
    appId: "1:351407538301:web:77a57f69bd527a1df57114",
    measurementId: "G-B8DCB90RB2"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase