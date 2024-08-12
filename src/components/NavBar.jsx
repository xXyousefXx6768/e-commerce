import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles/navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }} // Initial opacity and position
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and final position
      transition={{ type: 'spring', stiffness: 120, damping: 6 }} // Spring animation config
    >
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            Examble
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Example
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" to={'/'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about'}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/signup'}>
                    Sign Up
                  </Link>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              
              </form>
              <div className='d-flex justify-content-around align-items-center' style={{width:'20%'}} >
                <Link to={'/myaccount'}>
              <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to={'/cart'}>
              <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              <Link to={'/wishlist'}>
              <FontAwesomeIcon icon={faHeart} />
              </Link>
              </div>
              
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default  NavBar;
