
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404!!</h1>
      
      <h3>Opps!!  Page Not Found.</h3>

      
      <Link to="/" >
      
        <button className="btn btn-secondary text-light">
          Back to Home
        </button>

      </Link>
    </div>
  );
};

export default NotFound;