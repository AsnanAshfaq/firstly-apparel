import Header from "../components/Header";
import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { link } from "../styles";
import Accordian from "../components/Accordian";
import MyOrders from "../components/MyOrders";

function Home() {
  return (
    <div className="row m-0 p-0">
      <Header />
      {/* side bar 🎈 */}
      <div className="row m-0 p-0 d-flex flex-row" style={{ marginTop: 30 }}>
        <Accordian />
        {/* black space  */}
        <div className="col-1"></div>
        <MyOrders />
      </div>
    </div>
  );
}

export default Home;
