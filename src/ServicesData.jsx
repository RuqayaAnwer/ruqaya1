import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./servicesdata.css";
import { useParams } from "react-router-dom";

function ServicesData() {
  const [data, setData] = useState("dev");
  const { city } = useParams();
  console.log(city);

  const [services, setServices] = useState([
    {
      name: "تنظيم مناسبات اجتماعية",
      id: "1",
      img: "/images/tma1.jpg",
    },
    {
      name: "تجهيز حنة ومهر",
      id: "2",
      img: "/images/hena22.jpeg",
    },
   
    {
      name: "تزيين اعياد ميلاد",
      id: "3",
      img: "/images/hbd3.jpg",
    },
    {
      name: "تزيين غرف ولادة",
      id: "4",
      img: "/images/tzeen4.jpg",
    },
    {
      name:"حفل معرفة جنس الجنين",
      id: "5",
      img: "/images/b&g5.jpg",
    },
    {
      name:"تصوير فوتوغرافي",
      id: "6",
      img: "/images/photo.jpg",
    },
    {
      name: "كيك ",
      id: "7",

      img: "/images/cake7.jpg",
    },
    {
      name: "هدايا",
      id: "8",
      img: "/images/gift8.jpg",
    },
    {
      name: "ورد",
      id: "9",
      img: "/images/flower9.jpg",
    },
    {
      name: "هاند ميد",
      id: "10",
      img: "/images/hand10.jpg",
    },
  ]);

  const showServices = true;
  return (
    <div className="serv">
      {showServices ? (
        <>
         
          <div className="flex flex-warp justify-center">
            {services.map((service) =>{
              return (
                <Link to={`/orginiser/${service.city}/${service.id}`}>
                  <img src={service.img} alt={service.name} className="cards" />
                  <h6 className="service">{service.name}</h6>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <p>you can not the services</p>
      )}
    </div>
  );
}

export default ServicesData;
