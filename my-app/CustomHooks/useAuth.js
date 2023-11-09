
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { firebase } from '../config'

const AuthContext= createContext({});

export const AuthProvider = ({children}) => {

  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

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