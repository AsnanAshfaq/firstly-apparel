import Header from "../components/Header";
import "../App.css";
import Accordian from "../components/Accordian";
import { useEffect } from "react";
import useMainState from "../State/MainState";
import OrderCard from "../components/OrderCard";

function Home() {
  const { Loading, MyOrders, handleMyOrders, moveToHistory } = useMainState();

  useEffect(() => {
    if (Loading) {
      handleMyOrders();
    }
  }, [MyOrders]);

  const handleHistory = (id) => {
    const isConfirmed = window.confirm(
      `Moving Order with ID " ${id} " to History`
    );
    if (isConfirmed) moveToHistory(id);
  };
  return (
    <div className="row m-0 p-0">
      <Header />
      {/* side bar 🎈 */}
      <div className="row m-0 p-0 d-flex flex-row" style={{ marginTop: 30 }}>
        <Accordian />
        {/* black space  */}
        <div className="col-lg-1 col-xl-1 col-md-1"></div>
        {/* show orders  */}
        <div className="col-lg-7 col-xl-7 col-md-7" style={{ marginTop: 30 }}>
          <h3>My Orders </h3>

          {Loading === false && MyOrders.length > 0 && (
            <h5>Total Orders : {MyOrders.length}</h5>
          )}

          {Loading === false ? (
            MyOrders.length > 0 ? (
              MyOrders.map((order) => (
                <div className="row mt-4" key={order.id}>
                  <OrderCard
                    key={order.id}
                    id={order.id}
                    order={order.data}
                    page={"My Orders"}
                    handleHistory={handleHistory}
                  />
                </div>
              ))
            ) : (
              <p>You dont have any orders 😄</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/* black space  */}
        <div className="col-lg-1 col-xl-1 col-md-1"></div>
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
