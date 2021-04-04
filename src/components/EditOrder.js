import React from "react";
import { useLocation, useParams } from "react-router";
import Accordian from "./Accordian";
import AddEditOrder from "./AddEditOrder";
import Header from "./Header";
const EditOrder = () => {
  let Location = useLocation();
  const order = Location.state.data;
  const { id } = useParams();
  return (
    <div className="row m-0 p-0">
      <Header />
      {/* side bar 🎈 */}
      <div className="row m-0 p-0 d-flex flex-row" style={{ marginTop: 30 }}>
        <Accordian />
        {/* black space  */}
        <div className="col-lg-1 col-xl-1 col-md-1"></div>
        {/* show orders  */}
        <div className="col-lg-7 col-xl-7 col-md-7" style={{ marginTop: 30 }}>
          <AddEditOrder
            heading={"Edit Order"}
            order={order}
            page={"Edit"}
            key={id}
          />
        </div>
        {/* black space  */}
        <div className="col-lg-1 col-xl-1 col-md-1"></div>
      </div>
      <div className="row">
        <div className="col">
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default EditOrder;
