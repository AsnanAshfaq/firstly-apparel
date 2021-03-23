//TODO: handle sign in
// handle sign out
// verify account
// set email password
import { auth } from "../firebase";
import { useState } from "react";
const AuthState = () => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const handeSignIn = async (email, password) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      if (result) {
        setisSignedIn(true);
        return true;
      }
    } catch (error) {
      return false;
    }
  };
  return { isSignedIn, handeSignIn };
};

export default AuthState;
