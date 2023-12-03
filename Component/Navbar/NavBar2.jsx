"use client"
import React from 'react';
import styles from './Navbar2.module.css'
// import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

const NavBar2=()=> {
    const [expand, updateExpanded] = React.useState(false);
    const [navColour, updateNavbar] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState("home");
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };
  
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  
    window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Brand
        className={styles.logotext}
        // as={Link} to='/'
      >
        <div className={styles.logo}></div>
      </Navbar.Brand>

      <Navbar.Toggle
        className={styles.navbartoggler}
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className={styles.responsivenavbar}>
        <Nav className='ms-auto' defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link
              href="#home"
              //   as={Link} to="/"
              onClick={() => updateExpanded(false)}
            >
              {" "}
              Home{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about" onClick={() => onUpdateActiveLink("about")}>
              Nosotros
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#services"
              onClick={() => onUpdateActiveLink("testimony")}
            >
              Servicios
            </Nav.Link>
          </Nav.Item>
          
             <Nav.Link
              href="#testimonials"
              onClick={() => onUpdateActiveLink("testimony")}
            >
            <span>Testimonios</span>
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => onUpdateActiveLink("testimony")}
            >
            <span>Contactanos</span>
            </Nav.Link>
   
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar2