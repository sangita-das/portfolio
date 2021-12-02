import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const MyProject = () => {
  const {id} = useParams();
 

  const[singleProject, setSingleProject] = useState([]);

    // single project data load by id
    useEffect(() => {
      fetch(`http://localhost:5000/projects/${id}`)
        .then(res => res.json())
        .then(data => setSingleProject(data))
    }, []);

  return (
    <div className="bg-dark">
      {/* <h2>This is single project details page</h2> */}
      {/* <p>{id}</p> */}
      <Flip>
      <h2 className="custom-orange-color fw-bold">Project Name: <span className="text-light fw-bold">{singleProject.name}</span></h2>
      </Flip>
      
      <Zoom left>
      <img src={singleProject.image} alt="" />
      </Zoom>
     <div className="container my-3 py-3">
     <h4><u className="p-3 custom-orange-color fw-bold">Description:</u>{singleProject.details}</h4>
     <p><li>Project Start:{singleProject.start}</li>
     <li>Project End:{singleProject.end}</li></p>
     <p class="card-text lh-lg">
                        <span className="fw-bold">Technology: </span>
                        {  
                         <span
                                    style={{
                                        backgroundColor: '#E5E7EB'
                                    }}
                                    className="px-2 py-1 rounded me-1 text-dark fw-bold"
                                >
                                    {singleProject.technology}{" "}
                                </span>
                          
                        }
                    </p>

                    <div className="card-footer pb-4  border-top-0 ">

<a href={singleProject.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light bg-dark me-2 mb-2 mb-md-0" type="button">
    <FontAwesomeIcon icon={faGlobe} /> Live Website
</a>


<a href={singleProject.github} target="_blank" rel="noreferrer" className="">
    <button className="btn btn-sm btn-outline-light bg-dark me-2 ">
        <FontAwesomeIcon icon={faGithub} /> Front-End GitHub
    </button>
</a>

{
    singleProject.server &&

    <a href={singleProject.server} target="_blank" rel="noreferrer" className="">
        <button className="btn btn-sm btn-outline-light bg-dark me-2 ">
            <FontAwesomeIcon icon={faGithub} /> Back-End GitHub
        </button>
    </a>
}



</div>
<Fade bottom>
  
<ul>
                      <li>
                      <p>Client Site Link: {singleProject.github}</p>
                      </li>
                      <li><p> Server Site Link: {singleProject.server}</p></li>
                      <li><p> Live Site Link: {singleProject.live}</p></li>
                    </ul>
</Fade>
     </div>

    </div>
  );
};

export default MyProject;