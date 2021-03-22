//TODO:
//handle add Order
// handle set Order
// Order Template
// Delete Order
// Edit Order
// Maintain Check list

import { useState } from "react";
import { db } from "../firebase";
function MainState() {
  const [MyOrders, setMyOrders] = useState([{}]);
  const [Loading, setLoading] = useState(true);

  const Order_Template = {
    currency: "",
    customer_brand: "",
    customer_contact: "",
    customer_name: "",
    date_of_order: "",
    order_delivery_deadline: "",
    price: "",
    region: "",
    total_pieces: "",
    type_of_order: "",
    type_of_product: "",
  };
  const handleMyOrders = () => {
    try {
      db.collection("Orders")
        .orderBy("order_delivery_deadline", "desc")
        .onSnapshot((snapshot) => {
          setMyOrders((prev) =>
            snapshot.docs.map((document) => {
              return {
                id: document.id,
                data: document.data(),
                ...prev,
              };
            })
          );
          setLoading(false);
        });
    } catch (error) {
      console.log("Error is", error);
    }
  };

  return { MyOrders, handleMyOrders, Loading };
}

export default MainState;
