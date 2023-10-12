import React from "react";
import "../style.css/city.css";
import { Link  } from "react-router-dom";

function City() {
 
  return (
    <>
      <div className="card-group">
        <Link className="card" to="/services/babil"  >
          <img
            src="https://www.datocms-assets.com/88015/1682054067-k7a7228-1.jpg?auto=compress%2Cformat&dpr=1&fit=clip&q=40&w=900"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              {" "}
              بابل
            </h5>
          </div>
        </Link>
        <Link className="card" to="/services/babil">
          <img
            src="https://www.datocms-assets.com/88015/1682054067-k7a7228-1.jpg?auto=compress%2Cformat&dpr=1&fit=clip&q=40&w=900"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              {" "}
              بغداد
            </h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default City;
