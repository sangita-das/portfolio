import React from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SingleProject = ({ p }) => {

    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (
        <div>
            <div class="card mb-5 shadow-lg ">
                <img src={p.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold">{p.name}</h5>
                    <p className="text-secondary">
                        <small>
                            <FontAwesomeIcon icon={faCalendar} /> {p.start} <FontAwesomeIcon icon={faLongArrowAltRight} />  {p.end}
                        </small>
                    </p>
                    <p class="card-text">
                        {p.details}
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
                <div className="card-footer pb-4 bg-white border-top-0 ">

                    <a href={p.live} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-outline-dark me-2 mb-2 mb-md-0">
                            <FontAwesomeIcon icon={faGlobe} /> Live Website
                        </button>
                    </a>

                    <a href={p.github} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-outline-dark me-2 mb-2 mb-md-0">
                            <FontAwesomeIcon icon={faGithub} /> Front-End GitHub
                        </button>
                    </a>

                    {
                        p.server &&

                        <a href={p.server} target="_blank" rel="noreferrer" className="">
                            <button className="btn btn-outline-dark me-2">
                                <FontAwesomeIcon icon={faGithub} /> Back-End GitHub
                            </button>
                        </a>

                    }
                </div>
            </div>
        </div>
    );
};

export default SingleProject;