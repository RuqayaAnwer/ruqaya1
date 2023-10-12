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
      city: "bag",
      img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    },
    // {
    //   name: "تزيين اعياد ميلاد",
    //   city: "bag",
    //   id: "2",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
    // {
    //   name: "هاند ميد",
    //   city: "bag",
    //   id: "3",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
    // {
    //   name: "تزيين غرف ولادة",
    //   city: "babil",
    //   id: "4",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
    // {
    //   name: "تزيين اعياد ميلا",
    //   id: "5",
    //   city: "babil",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
    // {
    //   name: "حفل معرفة جنس الجنين",
    //   id: "6",
    //   city: "babil",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
    // {
    //   name: "تجهيز حنة ومهر",
    //   id: "7",
    //   city: "babil",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
    // {
    //   name: "تصوير فوتوغرافي",
    //   id: "8",

    //   city: "babil",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
    // {
    //   name: "ورد",
    //   id: "9",

    //   city: "bag",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
    // {
    //   name: "هدايا",
    //   id: "10",

    //   city: "babil",
    //   img: "https://media.istockphoto.com/id/1136810581/photo/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles.jpg?b=1&s=612x612&w=0&k=20&c=nLp-X1bev4DJtWKRm7_VjJEKSVCI8B6qeyXziwk7Kjs=",
    // },
  ]);

  const showServices = true;
  return (
    <div className="serv">
      {showServices ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <div className="flex flex-warp justify-center">
            {services.map((service) =>{
              return (
                <Link to={`/orginiser/${service.city}/${service.id}`}>
                  <img src={service.img} alt={service.name} className="cards" />
                  ;<h6 className="service">{service.name}</h6>;
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
