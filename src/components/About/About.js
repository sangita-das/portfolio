import React from 'react';
import { faBriefcase, faCode, faLanguage, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { faFileCode, faIdCard } from '@fortawesome/free-regular-svg-icons';
import Footer from '../Footer/Footer';



const About = () => {
  return (
    <div className="bg-dark">
      <div className="container mb-5 text-light">
    <div className="pb-5 pt-3">
        <h3>
            <Flip top cascade>
                <span className="pb-2 custom-orange-color my-border-bottom">
                    <FontAwesomeIcon icon={faUser} /> About Me
                </span>
            </Flip>
        </h3>
    </div>

    <div className="container about-container">



      

        <Fade bottom >
            <section>
                <div className="row">
                    <div className="col-md-4">
                        <p className="fw-bold text-light ">
                            <FontAwesomeIcon className=" custom-orange-color" icon={faIdCard} /> About Me
                        </p>
                    </div>
                    <div className="col-md-8 ">
                       
                        <p style={{ textAlign: 'justify' }}>
                        I have completed my B.Sc from Leading University. Since my university life I am very passionate about programming, web designing and exploring new things in different creative fields. Building to my career as a Front-End Web Developer I have learned and experienced more website by using React.js, Material Ui, Tailwind, Bootstrap, React Hook Form, Javascript along with a decent knowledge of the backend technology like Node.js, Express.js, MongoDB, Heroku Firebase, Debugging and more tools.
                        </p>
                    </div>
                </div>
            </section>
        </Fade>

        <hr />

        <Fade bottom>
            <section>
                <div className="row">
                    <div className="col-md-4">
                        <p className="fw-bold text-light

">
                            <FontAwesomeIcon className=" custom-orange-color" icon={faUserGraduate} /> Education

                        </p>
                    </div>

                    <div className="col-md-3  ">
                        <div className="style={{ textAlign: 'justify' }}">
                        <p className="fw-bold my-2 ">Leading University</p>
                            <p>B.Sc in Electrical & Electronic Engineering </p>
                            
                                <li>Passing Year: 2019 </li>
                                <li>CGPA: 3.86/4.00 </li>
                        </div>
                         
                           
                        

                    </div>
                </div>
            </section>
        </Fade>

        <hr />

        <Fade bottom >
            <section className="about-section" >
                <div className="row">
                    <div className="col-md-4 ">
                        <p className="fw-bold text-light

">
                            <FontAwesomeIcon className=" custom-orange-color" icon={faCode} /> Skills
                        </p>
                    </div>
                    <div className="col-md-8 ">
                        {/* 1st row */}
                        <div className="row">
                            
                           
                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-nodejs-plain colored display-4"></i>
                                <p className="fw-bold">Node.js</p>
                            </div>

                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-javascript-plain colored display-4"></i>
                                <p className="fw-bold">JavaScript</p>
                            </div>

                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-express-original colored display-4"></i>
                                <p className="fw-bold">Express.js</p>
                            </div>

                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-react-original colored display-4"></i>
                                <p className="fw-bold">React</p>
                            </div>

                           

                        </div>


                        <div className="row">
                            

                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-html5-plain-wordmark colored display-4"></i>
                                <p className="fw-bold">HTML5</p>
                            </div>
                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-css3-plain-wordmark colored display-4"></i>
                                <p className="fw-bold">CSS3</p>
                            </div>

                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-bootstrap-plain colored display-4"></i>
                                <p className="fw-bold">Bootstrap 5</p>
                            </div>
                           
                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-tailwindcss-plain colored display-4"></i>
                                <p className="fw-bold">Tailwind CSS</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-materialui-plain colored display-4"></i>
                                <p className="fw-bold">Material UI</p>
                            </div>

                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-mongodb-plain colored display-4"></i>
                                <p className="fw-bold">MongoDB</p>
                            </div>

                            <div className="col flex-column trans-card pb-3">
                                <i className="devicon-git-plain-wordmark colored display-4"></i>
                                <p className="fw-bold">Git</p>
                            </div>
                            <div className="col flex-column trans-card pb-3">
                            </div>
                            <div className="col flex-column trans-card pb-3">
                            </div>
                            <div className="col flex-column trans-card pb-3">
                            </div>
                        </div>
                       
                        <div className="row">

                        </div>


                    </div>
                </div>
            </section>
        </Fade>

        <hr />

        <Fade bottom >
            <section className="about-section" >
                <div className="row">
                    <div className="col-md-4">
                        <p className="fw-bold text-light

">
                            <FontAwesomeIcon className=" custom-orange-color" icon={faFileCode} />  tools & Other Skills
                        </p>
                    </div>

                    <div className="col-md-6">
                       
                   
                                <span className="fw-bold m-2 p-2">Firebase</span>
                                <span className="fw-bold m-2 p-2">Netlify</span>
                                <span className="fw-bold m-2 p-2">UI/UX</span>
                                <span className="fw-bold m-2 p-2">Debugging</span>
                                <span className="fw-bold m-2 p-2">REST API</span>
                                <span className="fw-bold m-2 p-2">ES6</span>
                                              
                    </div>
                </div>
            </section>
        </Fade>

        <hr />

        <Fade bottom >
            <section className="about-section" >
                <div className="row">
                    <div className="col-md-4">
                        <p className="fw-bold text-light

">
                            <FontAwesomeIcon className=" custom-orange-color" icon={faBriefcase} /> Training & Courses
                        </p>
                    </div>

                    <div className="col-md">

                        <div className="d-flex justify-content-between">
                            <p className=""><b>Complete Web Development Course</b>: Programming Hero</p>
                            <p className="">Jun 2021 - Dec 2021</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className=""><b>Fundamentals of Graphic Design</b>: Coursera</p>
                            <p className="">june-2020</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className=""><b>Learn to Code for the web</b>: FutureLearn
                            </p>
                            <p className="">May -2020</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className=""><b>Programming for Everybody</b>: Coursera
                            </p>
                            <p className="">June-2020</p>
                        </div>

                    </div>

                </div>
            </section>
        </Fade>

        <hr />

       
        <Fade bottom>
            <section className="about-section" >
                <div className="row">
                    <div className="col-md-4">
                        <p className="fw-bold text-light

">
                            <FontAwesomeIcon className=" custom-orange-color" icon={faLanguage} />  Language
                        </p>
                    </div>

                    <div className="col-md-4">
                        <ul>
                            <li className="mt-2">English</li>
                            <li className="mt-2">Bengali</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Fade>

    </div>




</div >
<Footer></Footer>
    </div>
  );
};

export default About;