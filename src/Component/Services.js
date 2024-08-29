import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div>
  <section className="container-fluid inner_header">
    <h1 className="inner_heading_text">Our Services</h1>
  </section>
  <section className="container">
    <div className="row">
      <div className="col-md-9 left_inner_content">
        <Outlet/>
        
      </div>
      <div className="col-md-3 text-center sidebar_main"> {/* sidebar*/}
        <div className="sidebar_heading">Latest Post</div>
        <div className="row sidebar_box">
          <div className="col-md-3"><img src="images/banner_left_cake.png" className="img-fluid" /></div>
          <div className="col-md-9 text-left">
            <h3>Enjoy tasty foods at low cost</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and </p>
          </div>
        </div>
        <div className="row sidebar_box">
          <div className="col-md-3"><img src="images/banner_left_cake.png" className="img-fluid" /></div>
          <div className="col-md-9 text-left">
            <h3>Enjoy tasty foods at low cost</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and </p>
          </div>
        </div> 
        <div className="sidebar_heading">Categories</div>
        <div className="sidebar_category">
          <ul>
            <li><span className="fa fa-angle-double-right" aria-hidden="true" /> Food</li>
            <li><span className="fa fa-angle-double-right" aria-hidden="true" /> Restaurant</li>
            <li><span className="fa fa-angle-double-right" aria-hidden="true" /> Other</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}
