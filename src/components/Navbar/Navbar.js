import React from 'react'
import logo from '../../../src/images/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const resumeUrl = 'https://drive.google.com/file/d/1i4QlEjY81GlgvIYuCEya3NK__VLrZe6Z/view'

  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-md-3 bg-dark">
  
    <div className="container">
    <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="logo..." /> </a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item active">
          <Link to="/home" className="nav-link" >Home 
          </Link>
        </li>

     
        <li className="nav-item">
          <Link to="/about" className="nav-link cool-link ">about me
          </Link>
        </li>
        
        <li className="nav-item">
       <Link to={'/projects'} className="nav-link cool-link"> <FontAwesomeIcon icon={faStaylinked} /> My Projects 
       </Link>
        </li>

        <li className="nav-item">
        <a className="nav-link cool-link" rel="noreferrer" href={resumeUrl} target="_blank">Resume</a>
        </li>
        
        {/* <li className="nav-item">
          <a className="nav-link" href="#">portfolio</a>
        </li> */}
        <li className="nav-item">
        <Link to="/contacts" className="nav-link cool-link">Contact
        </Link>
        </li>
       
      </ul>
      </div>
  </div>
</nav>
  )
}

export default Navbar
