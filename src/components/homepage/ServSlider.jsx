import React from 'react'
import Marquee from 'react-fast-marquee'
import '../style.css/servslider.css'


function ServSlider() {
  return (
    <div className='slider'>
        
     
        <Marquee speed={100}
          loop={0}
        pauseOnClick>
         <div className='marquee-style' >
        
         
          <div className="marquee-item">
            <p>تنظيم مناسبات اجتماعية</p>
              <img src='/images/tma1.jpg' alt="tma" />
              
            </div>
            <div className="marquee-item">
            <p>تجهيز حنة ومهر</p>
              <img src='/images/hena22.jpeg' alt="hena"   />
            </div>
            <div className="marquee-item">
            <p>تزيين أعياد ميلاد</p>
              <img src='/images/hbd3.jpg' alt="hpd" />
              
            </div>
            <div className="marquee-item">
            <p>تزيين غرف ولادة</p>
              <img src='/images/tzeenbby4.jpeg' alt="tzeen"/>
          </div>


          <div className="marquee-item">
            <p>حفل معرفة جنس الجنين</p>
              <img src='/images/b&g5.jpg' alt="bg" />
              
          </div>
          
          <div className="marquee-item">
            <p>تصوير فوتوغرافي</p>
              <img src='/images/photo.jpg' alt="phot" />
              
          </div>
          
          <div className="marquee-item">
            <p>كيك</p>
              <img src='/images/cake7.jpg' alt="cake" />
              
          </div>
          
          <div className="marquee-item">
            <p>هدايا</p>
              <img src='/images/gift8.jpg' alt="gift" />
              
          </div>
          
          <div className="marquee-item">
            <p>ورد</p>
              <img src='/images/flower9.jpg' alt="flower" />
              
          </div>
          <div className="marquee-item">
            <p>هاند ميد</p>
              <img src='/images/hand10.jpg' alt="hand" />
              
            </div>
         
            
          </div>
           
              

        </Marquee>
      </div>
      
  )
}

export default ServSlider
