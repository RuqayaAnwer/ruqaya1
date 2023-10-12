import React, { useState } from "react";
import { Link , useParams } from "react-router-dom";
import { Organizers } from "../Data";


function Organizer1() {
  const [info, setInfo] = useState("dev");
  const { id } = useParams()
  const organizerId = Number(id);
  
  
  const isValidId = organizerId >= 11 && organizerId <= 33;
  const FilteredData = isValidId
  ? Organizers.filter((e) => e.servicesIds.includes(organizerId))
  : [];

  
  return (
    <div className="organaizer">
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setInfo(e.target.value);
        }}
      />
      <div className="flex flex-warp justify-center">
        {FilteredData.map((organizer) => {
          return (
            <Link to={`/orginiser/form/${organizer.id}`} key={organizer.id}>
              <img src={organizer.img} alt={organizer.name} className="cards" />
              <h6 className="organizer">{organizer.name}</h6>;
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Organizer1;
