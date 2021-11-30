import React from 'react';
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';
import About from '../About/About';
import Banner from '../Banner/Banner';
import './Home.css'
import profileimage from './../../images/about/profileimg.png';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';



const Home = () => {
  return (
    <div className="bg-secondary">
        
      <>
      
      <Particles 
                params={{
                  particles:{
                    number:{
                      value: 30,
                      density: {
                        enable:true,
                        value_area:900
                      }
                    },
                    shape:{
                      type: "star",
                      stroke:{
                        width: 6,
                        color: "f9ab00"
                      }
                    }
                  }
                 
                }} />
    
 
 
  <Banner></Banner>
  <div className="bg-secondary">
    <div className="container ">
      <div className="row d-flex- justify-content-center align-items-center py-5 my-5">

      <div className="about-img col-md-6 px-8 pl-lg-0 pb-5 pb-lg-4">
          <img src={profileimage}alt="" className="img-fluid w-100 rounded-circle shadow-sm" />
        </div>

        <div className="col-md-6">
        <Flip left>
        <h1 className="text-light fw-bold position-relative d-flex align-items-center justify-content-center">About Me</h1>
        </Flip>
          <p className="text-black fw-bold">
            <hr />
          Hi there! I'm Sangita. An aspiring MERN Stack Web Application Developer. I have experienced of 15+ web projects by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books, arts and gardening. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. </p>

         <div className="text-dark row mb-3">
         <Flip left>
         <div className="col-sm-6 py-2 ">
<h6 className="fw-bold" >Linkdin: <a className="text-dark" href="https://www.linkedin.com/in/sangita-das-9954611a8/">https://www.linkedin.com/in/sangita-das-9954611a8/</a></h6>
        </div>
         </Flip>
         <Flip left>
         <div className="col-sm-6 py-2 ">
<h6 className="fw-bold">Email: <span className="text-dark">sangita9606@gmail.com</span></h6>

        </div>
         </Flip>
        
         </div>
         

<Link to="/about" >
<Button className=" btn btn-outline-dark fw-bold mr-4">See More</Button>
</Link>
        </div>

        
       
      </div>
    </div>
  </div>

  {/* ==============================projects========================= */}

<Projects></Projects>


  <Footer></Footer>

 </>
    </div>



  );
};




export default Home;