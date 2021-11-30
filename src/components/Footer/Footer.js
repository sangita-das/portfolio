import React from 'react';

import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    const resumeUrl = 'https://drive.google.com/file/d/1i4QlEjY81GlgvIYuCEya3NK__VLrZe6Z/view?usp=sharing'


    return (
        <div className="">
            <footer className="mt-5 bg-dark">
                <div className="footer-top ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6">
                                <div className="address">
                                    <h3 className="text-uppercase fw-bold text-white">Sangita Das</h3>
                                    
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneAlt} /> +880234562345
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} /> sangita9606@gmail.com
                                    </p>

                                </div>
                            </div>

                            

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Site Links</h4>
                                <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><a href={resumeUrl} target="_blank" rel="noreferrer">Resume</a></li>
                                    <li><Link to="/project">Project</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                </ul>

                            </div>

                            <div className="col-lg-3 col-sm-6 newsletter">
                                <h4 className="text-uppercase fw-bold">Social Links</h4>

                                <div className="social-links mt-3">
                                <a href="https://github.com/sangita-das" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>

                                    <a href="https://www.linkedin.com/in/sangita-das55/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    
                                    <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <p>
                                Copyright  2021 - 2021 | All rights reserved by <a
                                        href="https://www.linkedin.com/in/sangita-das55/" target="_blank" rel="noreferrer" title="Linkdin profile link">
                                        <span className="text-white cool-link">Sangita Das</span></a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


              
            </footer>
        </div>
    );
};

export default Footer;