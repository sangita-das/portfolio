import React from 'react';
import Particles from 'react-particles-js';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
  return (
    <div>
        
      <>
      <Navbar></Navbar>
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
 </>
    </div>
  );
};

export default Home;