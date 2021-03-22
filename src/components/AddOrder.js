import { useState } from "react";
import Accordian from "./Accordian";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { currency, region, type_of_order, type_of_product } from "../Constants";

function AddOrder() {
  const [startDate, setStartDate] = useState(new Date());

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
                        >
                          {type_of_product.map((product) => (
                            <option value={product} selected>{product}</option>
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
                        />
                      </div>
                    </p>
                    <p>
                      Region
                      <div class="input-group input-group-sm mb-3 mt-2">
                        <select
                          class="custom-select w-50 p-1"
                          id="inputGroupSelect04"
                        >
                          {region.map((region) => (
                            <option value={region} selected>{region}</option>
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
                        />
                      </div>
                    </p>
                    <p>
                      Currency
                      <div class="input-group input-group-sm mb-3 mt-2">
                        <select
                          class="custom-select w-50 p-1"
                          id="inputGroupSelect04"
                        >
                          {/* <option selected></option> */}
                          {currency.map((curr) => (
                            <option value={curr} selected>{curr}</option>
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
                        >
                          {type_of_order.map((orderType) => (
                            <option value={orderType} selected>{orderType}</option>
                          ))}
                        </select>
                      </div>
                    </p>
                    <p>
                      Order Taken on
                      <div class="input-group input-group-sm mb-3 mt-2 p-1">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </p>
                    <p>
                      Order Deadline
                      <div class="input-group input-group-sm mb-3 mt-2 p-1">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button class="btn btn-primary  w-50">Add an Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* black space  */}
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default AddOrder;
