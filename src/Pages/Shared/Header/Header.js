import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LsideNav from '../LsideNav/LsideNav';

const Header = () => {

     const { user, logOut } = useContext(AuthContext);
     const handleLogOut = () => {
          logOut()
               .then(() => { })
               .catch(error => console.error(error))
     }

     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand>DRAGON-NEWS</Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                              </Nav>
                              <Nav>
                                   <Nav.Link href="#deets">
                                        {
                                             user?.uid ?
                                                  <>
                                                       <span>  {user?.displayName}</span>
                                                       <Button className='mx-3 btn-sm' onClick={handleLogOut} variant="primary">Log out</Button>
                                                  </>
                                                  :
                                                  <>
                                                      <Button variant="primary" className='btn-sm mx-3'> <Link className=' text-light text-decoration-none'  to="/login">Login</Link></Button>
                                                      <Button variant="primary" className='btn-sm mx-3'> <Link className=' text-light text-decoration-none'  to="/register">Register</Link></Button>
                                                  </>
                                        }
                                   </Nav.Link>
                                   <Link  to='/profile'>
                                        {user?.photoURL ?
                                             <Image style={{ height: '30px' }}
                                                  roundedCircle
                                                  src={user?.photoURL}
                                             />
                                             :
                                             <FaUser></FaUser>
                                        }
                                   </Link>
                              </Nav>
                              <div className='d-lg-none'>
                                   <LsideNav></LsideNav>
                              </div>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;