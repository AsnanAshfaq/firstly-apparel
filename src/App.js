import { useEffect, useState } from "react";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useAuthState from "./State/AuthState";
import { db,auth} from "./firebase";
import Order from "./components/Order";
import AddOrder from "./components/AddOrder";
import SignIn from "./containers/SignIn";
function App() {
  
  console.log("Auth is",auth)
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/add-order" component={AddOrder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
