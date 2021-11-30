import React, { useEffect, useState } from 'react';
// import './Projects.css';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import SingleProject from './SingleProject';
import Bounce from "react-reveal/Bounce";
import Fade from 'react-reveal/Fade';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function callApi() {
            let data = await fetch('../projects.json');
            data = await data.json();
            setProjects(data.slice(0, 5));
            setIsLoading(false);
        }
        callApi();
    }, [])



    return (
        <div className="mt-5">
            {
                isLoading ?

                <Loading></Loading>

                    :

                    <div>
                        <Bounce bottom cascade>
                            <h4 className="text-uppercase fw-bold pb-3 text-center">My Projects</h4>
                        </Bounce>

                        <Fade bottom>
                            {
                                projects.map(project => <SingleProject p={project}></SingleProject>)
                            }
                        </Fade>

                        <div className="text-center pb-5">
                            <Link to="/projects">
                                <button className="btn btn-dark">
                                    See All Projects <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </button>
                            </Link>
                        </div>
                    </div>


            }


        </div>
    );
};

export default Projects;