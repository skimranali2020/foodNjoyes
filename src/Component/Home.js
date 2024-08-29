import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
export default function Home() {
  return (
    <>
    <div class="menu_line"></div>
  
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true"> 
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner  ">
      <div class="carousel-item active bg_slide">
       
       <div class="row">
         <div class="col-md-4 text-right slider_image">
           <img src="images/banner_left_cake.png" />
         </div>
         <div class="col-md-8 slider_content">
           <h2>Enjoy Tasty foods at low cost</h2>
           <p>We provide low cost tasty food which is delicous and healthy also</p>
           <button class="btn btn-success">Learn More <span class="fa fa-angle-double-right arrs fa-lg" aria-hidden="true"></span>
  </button>
         </div>
       </div>
  
      </div>
     <div class="carousel-item  bg_slide">
       
       <div class="row">
         <div class="col-md-4 text-right slider_image">
           <img src="images/banner_left_cake.png" />
         </div>
         <div class="col-md-8 slider_content">
           <h2>Enjoy tasty foods at low cost</h2>
           <p>We provide low cost tasty food which is delicous and healthy also</p>
           <button class="btn btn-success">Learn More <span class="fa fa-angle-double-right arrs fa-lg" aria-hidden="true"></span>
  </button>
         </div>
       </div>
  
      </div>
      <div class="carousel-item  bg_slide">
       
       <div class="row">
         <div class="col-md-4 text-right slider_image">
           <img src="images/banner_left_cake.png" />
         </div>
         <div class="col-md-8 slider_content">
           <h2>Enjoy tasty foods at low cost</h2>
           <p>We provide low cost tasty food which is delicous and healthy also</p>
           <button class="btn btn-success">Learn More <span class="fa fa-angle-double-right arrs fa-lg" aria-hidden="true"></span>
  </button>
         </div>
       </div>
  
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  
  <div class="container heading_container ">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="heading_box">Featured Post</div>
        </div>
      </div>
  </div>
  
  
  <section class="container">
    <article class="row">
      <div class="col-md-4">
        <img src="images/left_article_image.jpg" class="img-fluid" />
      </div>
       <div class="col-md-8">
         
         <h2>Delicious and Healthy Cake  for you</h2>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <span>Read More</span>
  
       </div>
    </article>
  </section>
  
  
  <section class="container">
    <article class="row">
      <div class="col-md-4">
        <img src="images/left_article_image.jpg" class="img-fluid" />
      </div>
       <div class="col-md-8">
         
         <h2>Delicious and Healthy Cake  for you</h2>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <span>Read More</span>
  
       </div>
    </article>
  </section>
  
  
  <section class="container">
    <article class="row">
      <div class="col-md-4">
        <img src="images/left_article_image.jpg" class="img-fluid" />
      </div>
       <div class="col-md-8">
         
         <h2>Delicious and Healthy Cake  for you</h2>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <span>Read More</span>
  
       </div>
    </article>
  </section>
  
  
  <section class="container">
    <article class="row">
      <div class="col-md-4">
        <img src="images/left_article_image.jpg" class="img-fluid" />
      </div>
       <div class="col-md-8">
         
         <h2>Delicious and Healthy Cake  for you</h2>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <span>Read More</span>
  
       </div>
    </article>
  </section>
  
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="pagination">
          <ul>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
 
    </>
  )
}
