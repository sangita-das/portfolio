import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';


const SingleAllProject = ({ p }) => {

    const {_id} = p

    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (

        <div className="col  h-100">
            <div className="card h-100 shadow-lg bg-secondary project">

                <img src={p.image} className="card-img-top" alt="..." />

                <div className="card-body">
                    <a href={p.live} target="_blank" rel="noreferrer" className="hyper-link">
                        <h5 className="card-title project-name">{p.name}</h5>
                    </a>
                    <p className="text-light">
                        <small>
                            <FontAwesomeIcon icon={faCalendar} /> {p.start} <FontAwesomeIcon icon={faLongArrowAltRight} />  {p.end}
                        </small>
                    </p>
                    <p className="card-text text-light">
                        <ReactReadMoreReadLess
                            charLimit={100}
                            readMoreText={"+ more"}
                            readLessText={"- less"}
                        >
                            {p.details}
                        </ReactReadMoreReadLess>
                    </p>
                    <p className="card-text lh-lg">
                        <span className="fw-bold">Technology: </span>
                        {
                            techSplit.map(singleTech => (
                                <span
                                    style={{
                                        backgroundColor: '#E5E7EB'
                                    }}
                                    className="px-2 py-1 rounded me-1 "
                                >
                                    {singleTech}{" "}
                                </span>
                            ))
                        }
                    </p>
                </div>




                <div className="card-footer pb-4  border-top-0 ">

                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light bg-dark me-2 mb-2 mb-md-0" type="button">
                        <FontAwesomeIcon icon={faGlobe} /> Live Website
                    </a>


                    <a href={p.github} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-sm btn-outline-light bg-dark me-2 ">
                            <FontAwesomeIcon icon={faGithub} /> Front-End GitHub
                        </button>
                    </a>

                    {
                        p.server &&

                        <a href={p.server} target="_blank" rel="noreferrer" className="">
                            <button className="btn btn-sm btn-outline-light bg-dark me-2 mt-2">
                                <FontAwesomeIcon icon={faGithub} /> Back-End GitHub
                            </button>
                        </a>
                    }


                </div>

                <Link to={`/myProject/${_id}`}>
                <button className="btn btn-dark mt-4 " ><i className="fas fa-angle-double-right"></i> Explore More</button>
                </Link>
               
            </div>

        </div>
    );
};

export default SingleAllProject;