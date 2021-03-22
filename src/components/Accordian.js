import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { link } from "../styles";

function Accordian() {
  return (
    <div className="col-3">
      <div class="accordion" style={{ marginTop: 30 }} id="accordionExample">
        <div class="accordion-item" style={{ boxShadow: "none" }}>
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ boxShadow: "none", fontSize: 20 }}
            >
              Orders
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show w-50"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{ border: "none" }}
          >
            <div class="accordion-body" style={{ border: "none" }}>
              <div className="accordina-item-container">
                <Link to="/" style={link}>
                  <p className="link" style={{ cursor: "pointer" }}>
                    My Orders
                  </p>
                </Link>
              </div>
              <div className="accordina-item-container">
                <Link to="/add-order" style={link}>
                  <p className="link" style={{ cursor: "pointer" }}>
                    Add an Order
                  </p>
                </Link>
              </div>
              <div className="accordina-item-container">
                <Link to="/orders-history" style={link}>
                  <p className="link" style={{ cursor: "pointer" }}>
                    Histroy
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
