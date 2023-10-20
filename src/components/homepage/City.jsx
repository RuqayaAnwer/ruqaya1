import React from "react";
import "../style.css/city.css";
import { Link  } from "react-router-dom";

function City() {
 
  return (
    <>
      <div className="card-group">
        <Link className="card" to="/services/babil"  >
          <div className="card-img-container">
          <img
            src="/images/babil.jpg"
            className="card-img-top"
            alt="..."
            
          />

          </div>
         
          <div className="card-body">
            <h5 className="card-title">بابل</h5>
          </div>
        </Link>
        <Link className="card" to="/services/baghdad">
          <img
            src="/images/bagh.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">بغداد</h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default City;
