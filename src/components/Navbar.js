import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
            <Navbar.Brand href="#home"><img src={logo} alt="logo" height="50" /></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" exact className={styles.NavLink} activeClassName={styles.Active}>
                <i class="fa-solid fa-house"></i>Home
            </NavLink>
            <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}> 
                <i class="fa-solid fa-right-to-bracket"></i>Sign in
            </NavLink>
            <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}> 
                <i class="fa-solid fa-user"></i>Sign up
            </NavLink>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar