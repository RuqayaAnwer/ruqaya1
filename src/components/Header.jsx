import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.png'


import './style.css/header.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
     <ul className={`nav-links ${menuOpen ? 'menu active' : ''}`}>
       
        <li className="nav-item">
          <Link to="/about">من نحن</Link>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs">تواصل معنا</Link>
        </li>
       
      </ul>
     
         
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" />
      </button>
      
     
      <Link to="/"><img src={logo} alt="Logo" width={100} height={70} className="d-inline-block align-text-top" />
      </Link>
          
    </nav>
  );
}

export default Navbar;


































//import logo from '../assests/images/logo.png'
// function Header() {
//   return (
//     <div>
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="#">تواصل معنا </a>
         
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarText">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
//           <li className="nav-item">
//             <a className="nav-link" href="#">من نحن</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">تواصل معنا</a>
//           </li>
//         </ul>
//             <span className="navbar-text">
//            <div className="container-fluid">
//   <a className="navbar-brand" href="#">
//                   <img src={ logo} alt="Logo" width={100} height={70} className="d-inline-block align-text-top"  />
//                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon" />
// </button>

                  
    
//   </a>
// </div>

             

              
//         </span>
//       </div>
//     </div>
//   </nav>
// </div>

//   )
// }

// export default Header
