import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Profile = () => {
     const { user } = useContext(AuthContext);
     return (

         <div>
          <Card className='m-5 p-5'>
               
               <h3 className='text-center text-success'>Your Profile</h3>

               <h5>Your Name: {user.displayName}</h5>
               <h5>Your Email: {user?.email}</h5>
          </Card>
         </div>

     );
};

export default Profile;