import React, { useEffect, useState } from 'react';
import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../Loading/Loading';
import SingleAllProject from './SingleAllProject';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';


const AllProject = () => {

    const [allProjects, setAllProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function callApi() {
            let data = await fetch('https://quiet-hollows-55479.herokuapp.com/projects');
            data = await data.json();
            setAllProjects(data);
            setIsLoading(false);
        }
        callApi();
    }, [])


    return (
       <div className="bg-dark">
          <div className="container ">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-orange-color my-border-bottom text-light fw-bold">
                            <FontAwesomeIcon icon={faStaylinked} /> <u>PROJECTS</u>
                        </span>
                    </Flip>
                </h3>
            </div>

            {
                isLoading ?

                    <Loading></Loading>

                    :

                    <div>


                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <Zoom>
                                {
                                    allProjects.map(project => <SingleAllProject p={project}></SingleAllProject>)
                                }
                            </Zoom>
                        </div>
                    </div>
            }
        </div>
       </div>
    );
};

export default AllProject;