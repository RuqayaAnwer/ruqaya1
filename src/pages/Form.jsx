import React from "react";
import { useState, useEffect } from "react";
import OrgInfo from "../components/form/OrgInfo";
import SliderWork from "../components/form/SliderWork";
import Forma from "../components/form/Forma";
import { Link, useParams } from "react-router-dom";
import { organizersBaghdad, organizersBabil } from "../Data";


function Form() {
  const { id, city } = useParams();
  console.log(city);
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (city === "baghdad") {
      setFilteredData(organizersBaghdad.filter((e) => e.id === Number(id)));
    } else {
      setFilteredData(organizersBabil.filter((e) => e.id === Number(id)));
    }
  }, []);

  return (
    <>
      <OrgInfo FilteredData={FilteredData} />
      <div className="containerform">
       
          <Forma />
        {/* <div className="sliderinfo">
          <h1 style={{ textAlign: "center" }}>صور من اعمالهم </h1>
          <SliderWork />
        </div> */}
      </div>
      <div className="sliderinfo">
          <h1 className="aamal">صور من اعمالهم </h1>
          <SliderWork />
        </div>

      {/* <SliderWork  FilteredData={FilteredData}/> */}
      {/* <Forma /> */}

    </>
  );
}

export default Form;