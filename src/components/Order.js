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
import { card } from "../styles.js";
import firebase from "firebase";
import '../App.css'

function Order() {
  const { Loading, MyOrders, handleMyOrders } = useMainState();

  useEffect(() => {
    if (Loading) {
      handleMyOrders();
    }
  }, [MyOrders]);

  return (
    <div className="col-5" style={{ marginTop: 30 }}>
      <h3>My Orders </h3>

      {Loading === false && MyOrders.length > 0 && (
        <h5>Total Orders : {MyOrders.length}</h5>
      )}

      {Loading === false ? (
        MyOrders.length > 0 ? (
          MyOrders.map((order) => (
            <div className="row mt-4">
              <div
                className="col card p-4"
                style={{
                  backgroundColor: "#2c2f39",
                  minHeight: 200,
                  color: "white",
                  fontSize: 18,
                }}
              >
                <h5>Order ID&nbsp; &nbsp; {order.id}</h5>
                {/* customer details  */}
                <div className="d-flex flex-column">
                  <h5>Customer Details</h5>
                  <div className="container-fluid">
                    <p>Name : {order.data.customer_name}</p>
                    <p>Brand : {order.data.customer_brand}</p>
                    <p>Contact Info : {order.data.customer_contact}</p>
                  </div>
                </div>
                {/* order details  */}
                <div className="d-flex flex-column">
                  <h5>Order Details</h5>
                  <div className="container-fluid">
                    {/* <p>Order Taken on: {order.data.date_of_order}</p>
                    <p>Delivery Deadling: {order.data.order_delivery_deadline}</p> */}
                    <p>
                      Price : {order.data.price} ( {order.data.currency} )
                    </p>
                    <p>Total Pieces : {order.data.total_pieces}</p>
                    <p>Region : {order.data.region}</p>
                    <p>Product Type : {order.data.type_of_product}</p>
                    <p>Order Type : {order.data.type_of_order} Order</p>
                    <p>
                      Order Taken on :{" "}
                      {new Date(
                        order.data.date_of_order.seconds * 1000
                      ).toDateString()}
                    </p>
                    <p>
                      Order Deadline :{" "}
                      {new Date(
                        order.data.order_delivery_deadline.seconds * 1000
                      ).toDateString()}
                    </p>
                  </div>
                </div>
                {/* buttons  */}
                <div className="row d-flex flex-row">
                  <div className="col">
                    <button className="btn btn-dark w-100 link">
                      Check List
                    </button>
                  </div>
                  <div className="col">
                    <button className="btn btn-secondary w-100 link">
                      Move to Histroy
                    </button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary w-100 link">Edit</button>
                  </div>
                </div>
              </div>
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
