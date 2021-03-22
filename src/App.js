import { useEffect } from "react";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useMainState from "./State/MainState";
import { db } from "./firebase";
import Order from "./components/Order";
import AddOrder from "./components/AddOrder";
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/add-order" component={AddOrder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
