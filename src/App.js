import { useEffect, useState } from "react";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOrder from "./components/AddOrder";
import SignIn from "./containers/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import CheckList from "./components/Checklist";
import History from "./components/History";
import EditOrder from "./components/EditOrder";
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <ProtectedRoute component={Home} exact path="/" />
          <ProtectedRoute component={AddOrder} exact path="/add-order" />
          <ProtectedRoute component={History} exact path="/orders-history" />
          <ProtectedRoute component={CheckList} exact path="/:id/checklist" />
          <ProtectedRoute component={EditOrder} exact path="/:id/edit-order" />
          <Route exact path="/signin" component={SignIn} />
          <Route
            path="*"
            component={() => (
              <div className="container-fluid d-flex justify-content-center align-items-center">
                <h3 className="container-fluid d-flex justify-content-center align-items-center">
                  404 Page Not Found
                </h3>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
