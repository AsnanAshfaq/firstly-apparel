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
// move to history order (with an alert)

import { useEffect } from "react";
import useMainState from "../State/MainState";
import "../App.css";
import OrderCard from "./OrderCard";

function Order() {
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
    <div className="col-5" style={{ marginTop: 30 }}>
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
  );
}

export default Order;
