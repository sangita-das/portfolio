import React from 'react';
import Typed from 'react-typed';
import './Banner.css'

const Banner = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1i4QlEjY81GlgvIYuCEya3NK__VLrZe6Z/view'
  return (
    <div className="banner-wraper">
    <div className="main-info">
      <h1>Hello</h1>
      <h2 className="text-primary

">I'm <span className="font-weight-bolder">Sangita</span></h2>
     <Typed
     className = "typed-text"
     strings={["Frontend Developer", "Web Designer", "React JS Developer"]}
     typeSpeed={40}
     backSpeed={60}
     loop
     />

     <a href={resumeUrl} target="_blank" className="btn-main-offer">Download Resume</a>
     
    </div>
  </div>
  );
};

export default Banner;
