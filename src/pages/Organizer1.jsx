import React, { useState, useContext , useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { organizersBaghdad, organizersBabil } from "../Data";
import '../components/style.css/organizer1.css'

function Organizer1() {
  const [info, setInfo] = useState("dev");
  const { city , id } = useParams();
  console.log(city, id);
  
  const [FilteredData, setFilteredData] = useState([])

  useEffect(() => {
    if (city === "bag") {
      setFilteredData(organizersBaghdad.filter((e) => e.servicesIds.includes(Number(id))))
      console.log(organizersBaghdad.filter((e) => e.servicesIds.includes(Number(id))));
    } else {
      setFilteredData(organizersBabil.filter((e) => e.servicesIds.includes(Number(id))))
   }
  }, [])
  
  // let FilteredData = organizersBaghdad.filter((e) => e.servicesIds.includes(Number(id)) && e.city === city);
  // let FilteredData2 = organizersBabil.filter((e) => e.servicesIds.includes(Number(id)) && e.city === city);




  return (
    <div className="organaizer">
    
      <div className="flex flex-warp justify-center">
        {FilteredData.map((organizer) => {
          return (
            <Link to={`/orginiser/form/${organizer.city}/${organizer.id}`}>
              <img src={organizer.img} alt={organizer.name} className="cards" />
              <h6 className="organizer">{organizer.name}</h6>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Organizer1;
