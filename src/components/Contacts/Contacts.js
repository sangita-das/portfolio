import React from 'react';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';
import Flip from 'react-reveal/Flip';

const Contacts = () => {
  return (
    <div className="container ">
    <div className="pb-5 pt-3">
        <h3>
            <Flip top cascade>
                <span className="pb-2 custom-orange-color fw-bold my-border-bottom">
                    <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                </span>
            </Flip>
        </h3>
    </div>

    <div className="row">
       
        <div className="col-md-6 ">
          
            <h3 className="fw-bold text-dark">Contact Info</h3>
            <hr />
            <hr />

            <div className="mt-4 text-dark">
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Sylhet,  Bangladesh.</p>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> +8801628158140</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> sangita9606@gmail.com</p>

                <p>
                    <a href="https://www.linkedin.com/in/taibislamdipu/" rel="noreferrer" target="_blank" className="btn btn-linkedIn me-2 ">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a href="https://github.com/taibislamdipu" rel="noreferrer" target="_blank" className="btn btn-github me-2">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    
                </p>
            </div>
        </div>

        <div className="col-md-6">
            <h4 className="mb-3 fw-bold text-dark">Have any question? Please send your message here</h4>
            <ContactForm></ContactForm>
        </div>


    </div>
</div>
  );
};

export default Contacts;