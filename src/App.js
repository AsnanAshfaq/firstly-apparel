import { useEffect } from "react";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useMainState from "./State/MainState";
import { db } from "./firebase";
import Order from "./components/Order";
function App() {
  const { MyOrders, handleMyOrders, Loading } = useMainState();

  // useEffect(() => {
  //   // If it is loading
  //   // then fetch the data from firebase
  //   // and store it in main state

  // },[]);
  return (
    <div className="container-fluid">
      <Router>
        <Home />
        <Switch>
          <Route exact path="/add-order" component={Order} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
