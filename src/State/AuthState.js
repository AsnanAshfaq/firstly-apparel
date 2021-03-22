//TODO: handle sign in
// handle sign out
// verify account
// set email password
import { auth } from "../firebase";

const AuthState = () => {
  const handeSignIn = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
};

export default AuthState;
