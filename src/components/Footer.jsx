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
            <h6 >تواصل معنا</h6>
            <p>
            <a href="https://wa.me/9647727508393" target="_blank"  rel="noreferrer" ><i className="fas fa-phone"></i> 07859160096</a></p>
            <p style={{fontWeight:"bold"}}><a href='mailto:eng.ruqayaanwar@gmail.com'><i className="fas fa-envelope"></i></a> eng.ruqayaanwar@gmail.com</p>
          </div>
          <div className="col-md-5 col-lg-4 col-12">
            <img src={logo} alt="لوجو" width={100} height={75} />
            <div className="footer-icon">
            <a href='https://www.facebook.com/Eng.Ruqayya'> <i className="fab fa-facebook"></i></a>
              
              
              <a href='https://www.linkedin.com/in/ruqaya-anwer-9a2029288/'><i className="fab fa-linkedin"></i></a>
               <a href='https://www.facebook.com/Eng.Ruqayya'> <i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
