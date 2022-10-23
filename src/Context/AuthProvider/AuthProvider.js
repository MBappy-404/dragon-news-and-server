import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, verifyBeforeUpdateEmail } from "firebase/auth";
import app from '../../Firebase/Firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser)
  }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser)

    });

    return () => {
      unsubscribe();
    }

  }, [])
  const authInfo = {
    user,
    providerLogin,
    logOut,
    createUser,
    signIn,
    updateUserProfile,
    verifyEmail
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;