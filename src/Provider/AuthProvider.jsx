import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import app from "./../firebase/firebase,config";

export const AutContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const creatUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLoge = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitlog = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logdOut = () => {
    return signOut(auth);
  };

  // const varifyEmail = () => {
  //   return sendEmailVerification(auth.currentUser);
  // };

  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //Objarver
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
      setLoding(false);
    });
    // stop obserbing
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    creatUser,
    loding,
    singIn,
    logdOut,
    googleLoge,
    // varifyEmail,
    forgetPassword,
    gitlog,
    updateUser,
  };
  return <AutContext.Provider value={authInfo}>{children}</AutContext.Provider>;
};

export default AuthProvider;
