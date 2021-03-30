//TODO: handle sign in
// handle sign out
// verify account
// set email password
import { auth } from "../firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const AuthState = () => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const history = useHistory();
  const handeSignIn = async (email, password) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      if (result) {
        setisSignedIn(true);
        return "Successfull";
      }
    } catch (error) {
      return error;
    }
  };

  const handleSignOut = () => {
    auth.signOut();
    history.replace("/signin")
  };
  return { isSignedIn, handeSignIn, handleSignOut };
};

export default AuthState;
