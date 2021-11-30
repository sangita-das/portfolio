import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import ReactReadMoreReadLess from "react-read-more-read-less";


const SingleAllProject = ({ p }) => {


    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (

        <div class="col">
            <div class="card h-100 shadow-lg bg-secondary project">

                <img src={p.image} class="card-img-top" alt="..." />

                <div class="card-body">
                    <a href={p.live} target="_blank" rel="noreferrer" className="hyper-link">
                        <h5 class="card-title project-name">{p.name}</h5>
                    </a>
                    <p className="text-light">
                        <small>
                            <FontAwesomeIcon icon={faCalendar} /> {p.start} <FontAwesomeIcon icon={faLongArrowAltRight} />  {p.end}
                        </small>
                    </p>
                    <p class="card-text text-light">
                        <ReactReadMoreReadLess
                            charLimit={100}
                            readMoreText={"+ more"}
                            readLessText={"- less"}
                        >
                            {p.details}
                        </ReactReadMoreReadLess>
                    </p>
                    <p class="card-text lh-lg">
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




                <div className="card-footer pb-4 bg-primary border-top-0 ">

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


            </div>

        </div>
    );
};

export default SingleAllProject;