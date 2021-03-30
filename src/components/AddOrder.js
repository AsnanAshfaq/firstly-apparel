import { useState } from "react";
import Accordian from "./Accordian";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { currency, region, type_of_order, type_of_product } from "../Constants";
import useMainState from "../State/MainState";

function AddOrder() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { AddOrder, handleAddOrder, addingOrder } = useMainState();

  return (
    <div className="row m-0 p-0">
      <Header />
      {/* side bar 🎈 */}
      <div className="row m-0 p-0 d-flex flex-row" style={{ marginTop: 30 }}>
        <Accordian />
        {/* black space  */}
        <div className="col-1"></div>
        <div className="col-6" style={{ marginTop: 30 }}>
          <h3>Add an Order</h3>
          <div className="row mt-4">
            <div className="col">
              <div className="d-flex flex-column">
                <h5>Enter Customer Details</h5>
                <div className="container-fluid">
                  <p>
                    Customer Name
                    <div class="input-group input-group-sm mb-3 mt-2">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={AddOrder.customer_name}
                        onChange={(e) =>
                          handleAddOrder("customer_name", e.target.value)
                        }
                      />
                    </div>
                  </p>
                  <p>
                    Customer Brand (if any)
                    <div class="input-group input-group-sm mb-3 mt-2">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={AddOrder.customer_brand}
                        onChange={(e) =>
                          handleAddOrder("customer_brand", e.target.value)
                        }
                      />
                    </div>
                  </p>
                  <p>
                    Phone Number / Email / Instagram ID
                    <div class="input-group input-group-sm mb-3 mt-2">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={AddOrder.customer_contact}
                        onChange={(e) =>
                          handleAddOrder("customer_contact", e.target.value)
                        }
                      />
                    </div>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column">
                  <h5>Enter Order Details</h5>
                  <div className="container-fluid">
                    <p>
                      Product Type
                      <div class="input-group input-group-sm mb-3 mt-2">
                        <select
                          class="custom-select w-50 border-none p-1"
                          id="inputGroupSelect04"
                          value={AddOrder.type_of_product}
                          onChange={(e) =>
                            handleAddOrder("type_of_product", e.target.value)
                          }
                        >
                          {type_of_product.map((product) => (
                            <option value={product} selected>
                              {product}
                            </option>
                          ))}
                        </select>
                      </div>
                    </p>
                    <p>
                      Total Pieces
                      <div class="input-group input-group-sm mb-3 mt-2">
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                          value={AddOrder.total_pieces}
                          onChange={(e) =>
                            handleAddOrder("total_pieces", e.target.value)
                          }
                        />
                      </div>
                    </p>
                    <p>
                      Region
                      <div class="input-group input-group-sm mb-3 mt-2">
                        <select
                          class="custom-select w-50 p-1"
                          id="inputGroupSelect04"
                          value={AddOrder.region}
                          onChange={(e) =>
                            handleAddOrder("region", e.target.value)
                          }
                        >
                          {region.map((region) => (
                            <option value={region} selected>
                              {region}
                            </option>
                          ))}
                        </select>
                      </div>
                    </p>
                    <p>
                      Price
                      <div class="input-group input-group-sm mb-3 mt-2">
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                          onChange={(e) =>
                            handleAddOrder("price", e.target.value)
                          }
                          value={AddOrder.price}
                        />
                      </div>
                    </p>
                    <p>
                      Currency
                      <div class="input-group input-group-sm mb-3 mt-2">
                        <select
                          class="custom-select w-50 p-1"
                          id="inputGroupSelect04"
                          value={AddOrder.currency}
                          onChange={(e) =>
                            handleAddOrder("currency", e.target.value)
                          }
                        >
                          {currency.map((curr) => (
                            <option value={curr} selected>
                              {curr}
                            </option>
                          ))}
                        </select>
                      </div>
                    </p>
                    <p>
                      Order Type
                      <div class="input-group  mt-2">
                        <select
                          class="custom-select w-50 p-1"
                          id="inputGroupSelect04"
                          value={AddOrder.type_of_order}
                          onChange={(e) =>
                            handleAddOrder("type_of_order", e.target.value)
                          }
                        >
                          {type_of_order.map((orderType) => (
                            <option value={orderType} selected>
                              {orderType}
                            </option>
                          ))}
                        </select>
                      </div>
                    </p>
                    <p>
                      Order Taken on
                      <div class="input-group input-group-sm mb-3 mt-2 p-1">
                        <DatePicker
                          selected={AddOrder.date_of_order}
                          onChange={(date) =>
                            handleAddOrder("date_of_order", date)
                          }
                        />
                      </div>
                    </p>
                    <p>
                      Order Deadline
                      <div class="input-group input-group-sm mb-3 mt-2 p-1">
                        <DatePicker
                          selected={AddOrder.order_delivery_deadline}
                          onChange={(date) =>
                            handleAddOrder("order_delivery_deadline", date)
                          }
                        />
                      </div>
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button class="btn btn-primary  w-50" onClick={addingOrder}>
                      Add an Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* black space  */}
        <div className="col-2"></div>
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

export default AddOrder;
