import React from 'react';
import blogImg from './../../images/blog-img.jpg';
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <h2>Blog writings are comming soon....</h2>

<div className="container">
  <div className="row main-row">
<div className="col-lg-4 col-md-12 col-sm-12">
<div className="blog-img">
<img src={blogImg} alt="blog" className="img-fluid"/>
</div>

<div className="row">
  <div className="col-sm-12 mb-2">
<ul className="list-group list-group-horizontal ul-cls">
  <li className="list-group-item" >
  <i className="fa fa-behance fa-2x" aria-hidden="true"></i>
  </li>
  <li className="list-group-item" >
  <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
  </li>
  <li className="list-group-item" >
  <i className="fab fa-linkedin-in fa-2x" aria-hidden="true" ></i>
  </li>
  <li className="list-group-item" >
  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
  </li>
</ul>
  </div>
</div>

</div>


<div className="col-lg-8 col-md-12 col-sm-12 ">
<div className="blog-title mb-3">
  <h3>Blog Post</h3>
</div>
<div className="blog-date mb-2">
  <span>Sunday</span>
  <span>September 14 2021</span>
</div>
<div className="blog-desc mb-2">
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia pariatur dolor velit! Veritatis quod dolore doloremque impedit laudantium itaque sequi et, incidunt omnis iusto, corrupti earum, sapiente voluptate facere ut.</p>
</div>
<div className="blog-read-more mb-2">
  <button className="btn btn-outline-dark">Read More</button>
</div>
</div>


  </div>
</div>


    </div>
  );
};

export default Blog;