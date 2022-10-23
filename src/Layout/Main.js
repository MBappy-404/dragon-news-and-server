import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LsideNav from '../Pages/Shared/LsideNav/LsideNav';
import RsideNav from '../Pages/Shared/RsideNav/RsideNav';

const Main = () => {
     return (
          <div>
               <Header></Header>
               <Container>
                    <Row>
                         <Col lg='2' className='d-none d-lg-block'>
                              <LsideNav></LsideNav>
                         </Col>
                         <Col lg='7'>
                              <Outlet></Outlet>
                         </Col>
                         <Col lg='3'>
                              <RsideNav></RsideNav>
                         </Col>
                    </Row>
               </Container>

               <Footer></Footer>
          </div>
     );
};

export default Main;