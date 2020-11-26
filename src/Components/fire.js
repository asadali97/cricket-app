import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/storage";

const fire = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDocF7fTBNl0xfMx4ADe7WwFNBxcv8u8jg",
    authDomain: "my-application-1b8b4.firebaseapp.com",
    databaseURL: "https://my-application-1b8b4.firebaseio.com",
    projectId: "my-application-1b8b4",
    storageBucket: "my-application-1b8b4.appspot.com",
    messagingSenderId: "1013120106751",
    appId: "1:1013120106751:web:a6191df56209692c5bccca",
    measurementId: "G-WWJ1TXX9BR"
  };
    firebase.initializeApp(firebaseConfig);
    firebase.storage();
}

export default fire;