import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceList() {
  return (
    <div>
        <section className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="fa fa-cutlery text-center col-md-12" aria-hidden="true" />
            <h3 className="text-center service_heading"><Link to="/restaurantt"> Restaurant </Link> </h3>
            <p>We have nice restaurant where you can get variety of foods with low cost price.</p>
          </div>
          <div className="col-md-4">
            <div className="fa fa-taxi text-center col-md-12" aria-hidden="true" />
            <h3 className="text-center service_heading"><Link to="/taxi"> Taxi To Airport </Link></h3>
            <p>We have nice restaurant where you can get variety of foods with low cost price.</p>
          </div>
          <div className="col-md-4">
            <div className="fa fa-taxi text-center col-md-12" aria-hidden="true" />
            <h3 className="text-center service_heading"><Link to="/lounge"> Lounge </Link></h3>
            <p>We have lush and greenery lounge where you can sit and rest and refresh yourself.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="fa fa-coffee text-center col-md-12" aria-hidden="true" />
            <h3 className="text-center service_heading"><Link to="/cofee"> Cofee </Link></h3>
            <p>We have Taxi for which we can provide you facility to pickup and drop to and from Airport.</p>
          </div>
          <div className="col-md-4">
            <div className="fa fa-hotel text-center col-md-12" aria-hidden="true" />
            <h3 className="text-center service_heading"><Link to="/rooms"> Rooms </Link></h3>
            <p>We have family rooms for our guest. If you want book our rooms you can contact us  any time</p>
          </div>
          <div className="col-md-4">
            <div className="fa fa fa-life-ring text-center col-md-12" aria-hidden="true" />
            <h3 className="text-center service_heading"><Link to="/wedding"> Wedding Hall </Link></h3>
            <p>We have fully decorated wedding hall for marriage. You can book our wedding hall by calling us.</p>
          </div>
        </div>
  </section> 
    </div>
  )
}
