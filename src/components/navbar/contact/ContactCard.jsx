import React from "react";

function ContactCards() {
  const cardsData = [
    {
      title: "Card 1",
      image: "path/to/image1.jpg",
      
    },
    {
      title: "Card 2",
      image: "path/to/image2.jpg",
    },
    {
      title: "Card 3",
      image: "path/to/image3.jpg",
    },
    {
      title: "Card 4",
      image: "path/to/image4.jpg",
    },
  ];

  return (
    <div className="contact-cards">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactCards;
