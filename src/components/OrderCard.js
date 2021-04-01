import { Link } from "react-router-dom";
import useMainState from "../State/MainState";

const OrderCard = ({ id, order, page, handleHistory, permanentDelete }) => {
  const { Loading, MyOrders, handleMyOrders, moveToHistory } = useMainState();

  return (
    <div
      className="col card p-4"
      style={{
        backgroundColor: "#2c2f39",
        minHeight: 200,
        color: "white",
        fontSize: 18,
      }}
    >
      <h5>Order ID&nbsp; &nbsp; {id}</h5>
      {/* customer details  */}
      <div className="d-flex flex-column">
        <h5>Customer Details</h5>
        <div className="container-fluid">
          <p>Name : {order.customer_name}</p>
          <p>Brand : {order.customer_brand}</p>
          <p>Contact Info : {order.customer_contact}</p>
        </div>
      </div>
      {/* order details  */}
      <div className="d-flex flex-column">
        <h5>Order Details</h5>
        <div className="container-fluid">
          <p>
            Price : {order.price} ( {order.currency} )
          </p>
          <p>Total Pieces : {order.total_pieces}</p>
          <p>Region : {order.region}</p>
          <p>Product Type : {order.type_of_product}</p>
          <p>Order Type : {order.type_of_order} Order</p>
          <p>
            Order Taken on :{" "}
            {new Date(order.date_of_order.seconds * 1000).toDateString()}
          </p>
          <p>
            Order Deadline :{" "}
            {new Date(
              order.order_delivery_deadline.seconds * 1000
            ).toDateString()}
          </p>
        </div>
      </div>
      {/* only three buttons if  we are on My Orders Page  */}
      {page === "My Orders" ? (
        <div className="row d-flex flex-row">
          <div className="col">
            <Link
              to={{
                pathname: `/${id}/checklist`,
                state: { data: order },
              }}
            >
              <button className="btn btn-dark w-100 link">Check List</button>
            </Link>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary w-100 link"
              onClick={() => handleHistory(id)}
            >
              Move to Histroy
            </button>
          </div>
          <div className="col">
            <button className="btn btn-primary w-100 link">Edit</button>
          </div>
        </div>
      ) : page === "History" && (
        <div className="row d-flex flex-row">
        <div className="col">
          <button
            className="btn btn-danger w-100 link"
            onClick={() => permanentDelete(id)}
          >
            Permanently Delete
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default OrderCard;
