import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { auth } from "../firebase";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const user = auth.currentUser;
        if (user !== null) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;
