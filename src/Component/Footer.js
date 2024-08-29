import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer class="container-fluid">
    <div class="container">
      
      <div class="row">
        <div class="col-md-4 footer_left" >
          <img src="images/footer_logo.jpg" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div class="col-md-4 footer_center">
          <h3>Links</h3>
          <ul>
            <li><Link to="/" href="">Home</Link></li>
            <li><Link to="/about" href="">About</Link></li>
            <li><Link to="/restaurant" href="">Food</Link></li>
            <li><Link to="" href="">Blog</Link></li>
          </ul>
        </div>
  
         <div class="col-md-4 footer_right">
          <h3>Address</h3>
          <ul>
            <li><a href="">ABC road Kolakata</a></li>
            <li><a href="">enquiry@foodnjoy.com</a></li>
            <li><a href="">Mo: 8583959528</a></li>
          </ul>
        </div>
          
  
        </div>
      </div>
  
   
  </footer>
    </div>
  )
}

export default Footer