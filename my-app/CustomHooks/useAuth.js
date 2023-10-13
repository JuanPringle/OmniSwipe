
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { firebase } from '../config'

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

  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState(null);
  const [Error, setError] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        setUser(user)
      }else{
        setUser(null)
      }
    })
  }, [])

  const logoutUser = async () => {
    setInitializing(true);
    await firebase.auth().signOut()
    .catch((e) => setError(e))
    .finally(() => setInitializing(false));
  }

  const memoedValue = useMemo(() => ({
    user, initializing, logoutUser,
  }), [user, initializing])

  return (
    <AuthContext.Provider 
      value={memoedValue}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default function useAuth(){
  return useContext(AuthContext);
}