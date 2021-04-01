//TODO:
//handle add Order
// handle set Order
// Order Template
// Delete Order
// Edit Order
// Maintain Check list
import firebase from "firebase";
import { useState } from "react";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
function MainState() {
  const Order_Template = {
    currency: "Pakistani Rupee",
    customer_brand: "",
    customer_contact: "",
    customer_name: "",
    date_of_order: new Date(),
    order_delivery_deadline: new Date(),
    price: "",
    region: "UK",
    total_pieces: "",
    type_of_order: "Sample",
    type_of_product: "Pants",
    TodoList: [
      {
        Value: "",
        isChecked: false,
      },
    ],
  };

  const [MyOrders, setMyOrders] = useState([{}]);
  const [historyOrders, sethistoryOrders] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [AddOrder, setAddOrder] = useState(Order_Template);
  const [Error, setError] = useState("");
  const History = useHistory();
  const handleAddOrder = (key, value) => {
    let x = {
      currency: AddOrder.currency,
      customer_brand: AddOrder.customer_brand,
      customer_contact: AddOrder.customer_contact,
      customer_name: AddOrder.customer_name,
      date_of_order: AddOrder.date_of_order,
      order_delivery_deadline: AddOrder.order_delivery_deadline,
      price: AddOrder.price,
      region: AddOrder.region,
      total_pieces: AddOrder.total_pieces,
      type_of_order: AddOrder.type_of_order,
      type_of_product: AddOrder.type_of_product,
      TodoList: AddOrder.TodoList,
    };
    x[key] = value;
    setAddOrder(x);
  };

  const addingOrder = () => {
    // checking for errors
    if (AddOrder.customer_name === "") setError("Please Enter Customer Name");
    else if (AddOrder.customer_contact === "")
      setError("Please Enter Customer Contact Info");
    else if (AddOrder.total_pieces === "")
      setError("Please Enter Total Pieces");
    else if (AddOrder.price === "") setError("Please Enter Pirce");
    else if (AddOrder.order_delivery_deadline === new Date())
      setError("Please set Valid Deadline");

    if (Error !== "") alert(Error);
    else {
      // convert date to firebase timestamp
      AddOrder["date_of_order"] = firebase.firestore.Timestamp.fromDate(
        AddOrder["date_of_order"]
      );
      AddOrder[
        "order_delivery_deadline"
      ] = firebase.firestore.Timestamp.fromDate(
        AddOrder["order_delivery_deadline"]
      );
      console.log("Order is ", AddOrder);
      // add order to database
      db.collection("Orders")
        .add(AddOrder)
        .then(() => {
          console.log("Data has been added");
          History.replace("/");
        })
        .catch((e) => alert(e.message));
    }
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
      alert(`Error is, ${error.message}`);
    }
  };

  // saving a todo to the database
  const savingTodo = (id, data) => {
    console.log("Data is ", data);
    db.collection("Orders")
      .doc(id)
      .update({
        TodoList: data,
      })
      .then(() => {
        console.log("Data has been added");
        alert("Data has been updated");
      })
      .catch((e) => alert(e.message));
  };

  // moving order to history
  const moveToHistory = (id) => {
    const ref = db.collection("Orders").doc(id);
    ref.get().then(async (doc) => {
      if (doc.exists) {
        // store document in history collection
        await db.collection("History").add(doc.data());
        // and delete from orders collection
        await db.collection("Orders").doc(id).delete();
        History.replace("/");
      }
    });

    console.log("Ref is", ref);
  };

  // get all the docs in history
  const getHistory = () => {
    try {
      db.collection("Orders")
        .orderBy("order_delivery_deadline", "desc")
        .onSnapshot((snapshot) => {
          sethistoryOrders((prev) =>
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
      alert(`Error is, ${error.message}`);
    }
  };

  // deleting a document permanently
  const permanentDelete = () => {};
  return {
    MyOrders,
    historyOrders,
    Loading,
    AddOrder,
    handleMyOrders,
    handleAddOrder,
    addingOrder,
    savingTodo,
    moveToHistory,
    getHistory,
    permanentDelete,
  };
}

export default MainState;
