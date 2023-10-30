import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { setDoc, doc } from 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCo750NYS_o8V_6JMimyGKOUKs9xVKKw_0",
    authDomain: "omniswipe-e0411.firebaseapp.com",
    databaseURL: "https://omniswipe-e0411-default-rtdb.firebaseio.com",
    projectId: "omniswipe-e0411",
    storageBucket: "omniswipe-e0411.appspot.com",
    messagingSenderId: "895208776685",
    appId: "1:895208776685:web:0c18c1990449c21039fde4",
    measurementId: "G-9N904MQX0S"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = app.firestore();
const userDB = firestore.collection('Users');



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { auth, firebase, app, firestore };