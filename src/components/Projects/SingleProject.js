import React from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SingleProject = ({ p }) => {
const {_id} = p
    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (
        <div className="h-100">
            <div class="card mb-5 shadow-lg h-100">
                <img src={p.image} class="card-img-top" alt="..." />
                <div class="card-body ">
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
               
                <Link to={`/myProject/${_id}`}>
                <button className="btn btn-dark mt-4" ><i class="fas fa-angle-double-right"></i> Explore More</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleProject;