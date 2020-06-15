import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as logomarca from '../../assets/images/logomarca.png';

import './styles.css';

function NavigationBar() {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" className='nav' variant='dark'>
      <Navbar.Brand href="#home">
        <Image src={logomarca}></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to='/home'>
          <Nav.Link href="#">Perfil</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/quiz'>
          <Nav.Link href="#">Quiz</Nav.Link>
          </LinkContainer>
      </Nav>
      </Navbar.Collapse>
  </Navbar>
    </div>
    
  );
}

export default NavigationBar;