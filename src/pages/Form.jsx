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
    if (city === "bag") {
      setFilteredData(organizersBaghdad.filter((e) => e.id === id));
    } else {
      setFilteredData(organizersBabil.filter((e) => e.id === Number(id)));
    }
  }, []);
 
  return (
    <>
      <OrgInfo FilteredData={FilteredData} />
      <SliderWork  FilteredData={FilteredData}/>
      <Forma />
     
    </>
  );
}

export default Form;
