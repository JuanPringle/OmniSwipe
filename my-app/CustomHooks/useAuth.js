import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, { createContext, useContext, useReducer } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';

const AuthContext= createContext({});

const firebaseConfig = {
  apiKey: "AIzaSyCo750NYS_o8V_6JMimyGKOUKs9xVKKw_0",
  authDomain: "omniswipe-e0411.firebaseapp.com",
  projectId: "omniswipe-e0411",
  storageBucket: "omniswipe-e0411.appspot.com",
  messagingSenderId: "895208776685",
  appId: "1:895208776685:web:0c18c1990449c21039fde4",
  measurementId: "G-9N904MQX0S"
};


export const AuthProvider = ({children}) => {

  const [user, setUser] = React.useState()
  const app = initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  //const analytics = getAnalytics(app);

  const createUser = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      
    })
  }

  const LoginUser = (email, password) => {
    
  }

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
};

export default function useAuth(){
  return useContext(AuthContext);
}