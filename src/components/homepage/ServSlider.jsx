import React from 'react'
import '../style.css/servslider.css'

function ServSlider() {
  return (
    <>
   <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://www.datocms-assets.com/88015/1682054067-k7a7228-1.jpg?auto=compress%2Cformat&dpr=1&fit=clip&q=40&w=900" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.datocms-assets.com/88015/1682054067-k7a7228-1.jpg?auto=compress%2Cformat&dpr=1&fit=clip&q=40&w=900" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  
    </>
  );
  
};

export default ServSlider
