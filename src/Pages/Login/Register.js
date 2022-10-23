import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
     const { createUser,updateUserProfile,verifyEmail } = useContext(AuthContext);
     const [error, setError] = useState([]);
     const navigate = useNavigate();
     const [accept, setAccept] = useState(false)

     const handleSubmit = (e) => {
          e.preventDefault();

          const form = e.target;
          const name = form.username.value;
          const email = form.email.value;
          const password = form.password.value;

          // console.log(name,email,password);
          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate('/home')
                    form.reset();
                    setError('');
                    handleUpdateUserProfile(name)
                    handleEmailVerify()
                    toast.success('Please Verify Your Email')
               })

               .catch(error => {
                    console.error(error);
                    setError(error.message)
               })
     };

     const handleEmailVerify = () =>{
          verifyEmail()
          .then((()=>{}))
          .catch(error => console.error(error))

     }

     const handleUpdateUserProfile = (name) =>{

          const profile = {displayName: name}
          updateUserProfile(profile)
          .then(()=>{})
          .catch(error => console.error(error))

     }

     const handleAccept = (e) =>{
          setAccept(e.target.checked)

     }

     return (
          <div>
               <Form onSubmit={handleSubmit} className=" border border-xl p-5 m-5">
               <h3 className='text-center text-primary'>Please Register</h3>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                         <Form.Label>Username</Form.Label>
                         <Form.Control name="username" type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control name="password" type="password" placeholder="Password" required />
                         <Form.Text className="text-danger">
                              {error}
                         </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                         <Form.Check type="checkbox"
                         onClick={handleAccept}
                              label={<>Accept <Link to="/terms">terms and condition</Link></>} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!accept}>
                         Register
                    </Button>
               </Form>
          </div>
     );
};

export default Register;