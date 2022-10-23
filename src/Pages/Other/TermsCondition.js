import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
     return (
          <div>
               <h4>Here is our Terms And Condition </h4>
               <p>Go Back to : <Link to="/register">Registration</Link></p>
          </div>
     );
};

export default TermsCondition;