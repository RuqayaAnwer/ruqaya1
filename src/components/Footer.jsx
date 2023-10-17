import React from 'react';
import logo from '../assests/images/logo.png';
import'./style.css/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-12">
           
            
          </div>
          <div className="col-md-4 col-lg-4 col-12">
            <h3>تواصل معنا</h3>
            <p><i className="fas fa-phone"></i> 077275083935</p>
            <p><i className="fas fa-envelope"></i> boqy@gmail.com</p>
          </div>
          <div className="col-md-5 col-lg-4 col-12">
            <img src={logo} alt="لوجو" width={100} height={75} />
            <p>اهلا بكم في موقع بوقي</p>
            <div className="footer-icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
