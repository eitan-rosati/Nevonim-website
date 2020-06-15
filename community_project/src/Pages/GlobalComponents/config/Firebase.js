import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRyJwGiykl5-St2SMNAzTM3EmChb7Ov0o",
    authDomain: "nevonim-5a6a0.firebaseapp.com",
    databaseURL: "https://nevonim-5a6a0.firebaseio.com",
    projectId: "nevonim-5a6a0",
    storageBucket: "nevonim-5a6a0.appspot.com",
    messagingSenderId: "246426991412",
    appId: "1:246426991412:web:5ebf3af9cb51789dea4361",
    measurementId: "G-9Y6K15XLT5"
};
  
firebase.initializeApp(firebaseConfig);
  
export default firebase;