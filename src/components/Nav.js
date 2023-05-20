import React, { useState } from 'react';
import "../Styles/navbar.css";

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 56){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <nav className={navbar ? "navbar navbar-expand-lg navbar-light bg-light fixed-top active" : "navbar navbar-expand-lg navbar-light bg-transparent fixed-top"}>
  <div className="container">
    <a className="navbar-brand" href="#">BOOK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
