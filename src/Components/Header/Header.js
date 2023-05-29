import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


const Header = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><i><h1> QUIZZ_QUIZZ</h1></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
                  
             <Nav className="path">
                <Link className='border rounded m-2 text-center' to="/"><h3>TOPICS</h3> </Link>
                <Link className='border rounded m-2 text-center' to="/statistics"><h3>STATISTICS</h3> </Link>
                <Link className='border rounded m-2 text-center' to="/blog"> <h3>BLOG</h3> </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;