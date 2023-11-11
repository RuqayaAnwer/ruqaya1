import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { organizersBaghdad, organizersBabil } from "../Data";
import '../components/style.css/organizer1.css'

function Organizer1() {
  // const [info, setInfo] = useState("");
  const { city, id } = useParams();
  console.log("City:", city);
  console.log("ID:", id);
  

  const [FilteredData, setFilteredData] = useState([])

  useEffect(() => {
    if (city === "baghdad") {
      setFilteredData(organizersBaghdad.filter((e) => e.servicesIds.includes(Number(id))));
    } else {
      setFilteredData(organizersBabil.filter((e) => e.servicesIds.includes(Number(id))));
    }
  }, [city, id]);
  

  // let FilteredData = organizersBaghdad.filter((e) => e.servicesIds.includes(Number(id)) && e.city === city);
  // let FilteredData2 = organizersBabil.filter((e) => e.servicesIds.includes(Number(id)) && e.city === city);




  return (
    <div className="organaizer">


      {FilteredData.map((organizer) => {
        return (
          <div className="orginfo">
            <Link to={`/orginiser/form/${city}/${organizer.id}`}>
              <img src={organizer.img} alt={organizer.name} />
              <h6 className="organizer">{organizer.name}</h6>
            </Link>
          </div>
        );
      })}

    </div>
  );
}

export default Organizer1;
