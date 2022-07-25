import React from 'react';
import './header.css'

function Mainheader() {
  return (
    <div id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope"></i> <a href="sankerbabu007@gmail.com"></a>contact@example.com
        <i className="bi bi-phone"></i> 9072278138
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>
  )
}

export default Mainheader