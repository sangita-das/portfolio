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
            let data = await fetch('http://localhost:5000/projects');
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

                    <div className="text-dark fw-bold">

<Bounce bottom cascade>
     <h2 className="text-uppercase fw-bold pb-3 text-center text-light">My Projects</h2>

                        </Bounce>
                        <div class="container row row-cols-1 row-cols-md-3 g-4">
                        

                        <Fade bottom>
                            {
                                projects.map(project => <SingleProject p={project}></SingleProject>)
                            }
                        </Fade>

                        <div className="text-center pb-5 my-5">
                            <Link to="/projects">
                                <button className="btn btn-light">
                                  <span className="text-dark fw-bold">See All Projects </span>  <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </button>
                            </Link>
                        </div>
                        
                    </div>
                    </div>




            }


        </div>
    );
};

export default Projects;