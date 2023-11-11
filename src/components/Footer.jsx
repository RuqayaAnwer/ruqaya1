import React from 'react';
import logo from '../assests/images/logo.png';
import'./style.css/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footerlogo">
          <img src={logo} alt="لوجو" />
          </div>

           
        <div className="row">
          
            <div className="footercontent">
            <div className="footer-icon">
            <a href='https://www.facebook.com/Eng.Ruqayya'> <i className="fab fa-facebook"style={{color:"black"}}></i></a>
              
              
              <a href='https://www.linkedin.com/in/ruqaya-anwer-9a2029288/'><i className="fab fa-linkedin" style={{color:"black"}}></i></a>
               <a href='https://www.facebook.com/Eng.Ruqayya'> <i className="fab fa-instagram" style={{color:"black"}}></i></a>
            </div>
          </div>
            <h6 >تواصل معنا</h6>
            <p>
            <a href="https://wa.me/9647727508393" target="_blank"  rel="noreferrer" style={{color:"black",textDecoration:"none"}}><i className="fas fa-phone"style={{color:"black"}}></i> 07859160096</a></p>
            <p style={{fontWeight:"bold"}}><a href='mailto:eng.ruqayaanwar@gmail.com'><i className="fas fa-envelope"style={{color:"black"}}></i></a> eng.ruqayaanwar@gmail.com</p>
          </div>
          
      </div>
    </footer>
  );
}

export default Footer;
