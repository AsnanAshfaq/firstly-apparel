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
  const [MyOrders, setMyOrders] = useState([
    {
     
    },
  ]);
  const [Loading, setLoading] = useState(true);

  const handleMyOrders = () => {
    try {
      db.collection("Orders").onSnapshot((snapshot) => {
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
