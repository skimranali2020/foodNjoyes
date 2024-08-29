import React from 'react'

export default function About() {
  return (
    <div>
    <div className="menu_line" />
    <section className="container-fluid inner_header">
      <h1 className="inner_heading_text">Enjoy tasty foods at low cost</h1>
    </section>
    <section className="container">
      <div className="row">
        <div className="col-md-9 left_inner_content">
          <img src="images/left_article_image.jpg" style={{float: 'left'}} className="img-fluid" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.type specimen book.
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was 
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.type specimen book.
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was 
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.    
          </p>
          <div className="row form_box">
            <div className="col-md-12"> Comment</div>
            <div className="col-md-12"><input type="text" name="full_name" className="form-control" placeholder="Enter Your Full name" /></div>
            <div className="col-md-12"><input type="email" name="email" className="form-control" placeholder="Enter Your Email Id" /></div>
            <div className="col-md-12">
              <textarea className="form-control" placeholder="Enter your comment" defaultValue={""} />
            </div>
            <div className="col-md-12 text-center"><button className="btn btn-success btn-comment">Post Your Comment</button></div>
          </div>
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
