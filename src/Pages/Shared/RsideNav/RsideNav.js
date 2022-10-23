import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RsideNav = () => {

     const {providerLogin} = useContext(AuthContext);
     const googleProvider = new GoogleAuthProvider();

     const handleGoogleSignIn = () =>{

          providerLogin(googleProvider)
          .then( result =>{
               const user = result.user;
               console.log(user);
          })
          .catch(error => console.error(error));

     }
     return (
          <div className='mt-5'>
               <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2'><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button variant="outline-dark"> <FaGithub></FaGithub> Login wIth Github</Button>
               </ButtonGroup>
               <div className='mt-4'>
                    <h5>Find Us On</h5>
                    <ListGroup>
                         <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                         <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                         <ListGroup.Item className='mb-2'> <FaYoutube></FaYoutube> You tube</ListGroup.Item>
                         <ListGroup.Item className='mb-2'> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    </ListGroup>
               </div>

               <div>
                    <BrandCarosel></BrandCarosel>
               </div>
          </div>
     );
};

export default RsideNav;