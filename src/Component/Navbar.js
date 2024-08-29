import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function Navbar() {
  return (
    <>
        

  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img src="images/logo.png" class="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
    
        <div class="collapse navbar-collapse" id="navbarScroll">
          
    <div>
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to='/services' className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><Link className="dropdown-item" href="#">Retaurant</Link></li>
                <li><Link className="dropdown-item" href="#">Taxi To Airport</Link></li>
                <li><Link className="dropdown-item" href="#">Lounge</Link></li>
                <li><hr className="dropdown-divider" /></li>
               
                <li><Link className="dropdown-item" href="#">Cofee</Link></li>
                <li><Link className="dropdown-item" href="#">Rooms</Link></li>
                <li><Link className="dropdown-item" href="#">Wedding Halls</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to='/travel' class="nav-link " href="#" tabindex="-1">Travel</Link>
            </li>
    
             <li class="nav-item">
              <Link to='/restaurant' class="nav-link " href="#" tabindex="-1" >Restaurant</Link>
            </li>
    
            <li class="nav-item">
              <Link to="/contact" class="nav-link " href="#" tabindex="-1">Contact</Link>
            </li>
          </ul>
    
    </div>
    
    <div class="social_box">
      <ul>
      <li><i class="fa fa-facebook"></i></li>
      <li><i class="fa fa-instagram"></i></li>
      <li><i class="fa fa-twitter"></i></li>
      <li><i class="fa fa-whatsapp"></i></li>
      </ul>
    </div>
      </div>
      </div>
    </nav>
  </div>
    </>
  );
}

export default Navbar;