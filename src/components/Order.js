//TODO: customer name
// customer number
// customer brand name
// type of product
// region
// total pieces
// type of order
// date of order
// deadline of order
// price
// check list
//BUTTONS
// edit order
// delete order (with an alert)
//handle alert (when wrong form is submitted)

import { useEffect } from "react";
import useMainState from "../State/MainState";
import { card } from "../styles.js";
function Order() {
  const { Loading, MyOrders, handleMyOrders } = useMainState();

  useEffect(() => {
    if (Loading) {
      console.log("My Orders");
      console.log(MyOrders);
      handleMyOrders();
    }
  }, [MyOrders]);

  return (
    <div className="col-5" style={{ marginTop: 30 }}>
      <h4>My Orders </h4>
      <p>Total Orders : </p>

      {Loading === false ? (
        MyOrders.map((order) => (
          <div className="row">
            <div
              className="col card"
              style={{
                backgroundColor: "white",
                minHeight: 200,
                color: "#1F2833",
                fontSize: 18,
              }}
            >
              <p>Order ID: {order.id}</p>
              <p>Bootstrap Card goes here</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}

      {/* {MyOrders.map((order) => {
        console.log("order mapping", order.id);
        return (
          <div className="row">
            <div
              className="col card"
              style={{
                backgroundColor: "white",
                minHeight: 200,
                color: "#1F2833",
                fontSize: 18,
              }}
            >
              <p>Order ID: {order.id}</p>
              <p>Bootstrap Card goes here</p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default Order;
