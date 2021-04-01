import { useEffect } from "react";
import Accordian from "./Accordian";
import Header from "./Header";
import Order from "./Order";
import useMainState from "../State/MainState";
import OrderCard from "./OrderCard";

const History = () => {
  const {
    Loading,
    getHistory,
    historyOrders,
    permanentDelete,
  } = useMainState();

  useEffect(() => {
    if (Loading) {
      getHistory();
      console.log("History orders are", historyOrders);
    }
  }, [historyOrders]);
  return (
    <div className="row m-0 p-0">
      <Header />
      {/* side bar 🎈 */}
      <div className="row m-0 p-0 d-flex flex-row" style={{ marginTop: 30 }}>
        <Accordian />
        {/* black space  */}
        <div className="col-1"></div>
        <div className="col-5" style={{ marginTop: 30 }}>
          <h3>Orders History </h3>

          {Loading === false && historyOrders.length > 0 && (
            <h5>Total Orders : {historyOrders.length}</h5>
          )}
          {Loading === false ? (
            historyOrders.length > 0 ? (
              historyOrders.map((order) => (
                <div className="row mt-4" key={order.id}>
                  <OrderCard
                    key={order.id}
                    id={order.id}
                    order={order.data}
                    page={"My Orders"}
                    permanentDelete={permanentDelete}
                  />
                </div>
              ))
            ) : (
              <p>No Orders in History 😄</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
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
};

export default History;
