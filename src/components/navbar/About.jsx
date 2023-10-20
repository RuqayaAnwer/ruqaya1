import React from 'react';
import './contact/about.css';

function About() {
  return (
    <div className='about'>
       <div className='left'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src="/images/boqyy.jpg" alt='img'  />
          </div>
          <div className='img-stack bottom'>
            <img src="/images/hbd3.jpg" alt='img'  />
          </div>
        </div>
      </div>
      <div className='right'>
        <h1>موقع بوقي</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quaerat optio quae voluptatum quos magni cumque? Quaerat hic libero
          earum consectetur placeat necessitatibus commodi quos iusto fugiat.
          Reiciendis, tenetur qui!
        </p>
      </div>
     
    </div>
  );
}

export default About;
