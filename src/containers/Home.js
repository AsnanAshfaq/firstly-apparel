import Header from "../components/Header";
import "../App.css";
import Accordian from "../components/Accordian";
import Order from "../components/Order";

function Home() {
  const data = "";
  return (
    <div className="row m-0 p-0">
      <Header />
      {/* side bar 🎈 */}
      <div className="row m-0 p-0 d-flex flex-row" style={{ marginTop: 30 }}>
        <Accordian />
        {/* black space  */}
        <div className="col-1"></div>
        <Order data={data} />
        {/* black space  */}
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col">
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
