import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import googleplay from '../components/assets/pngwing.com.png'
import appleStore from '../components/assets/pngwing.com (1).png'
import './styles/footer.css'

function Footer() {
  return (
    <footer className="  text-white py-4">
      <Container>
        <Row className="mb-3">
          <Col md={2}>
            <h5>Exclusive</h5>
            <p>Get 10% off your first order</p>
            <Form inline>
              <Form.Control type="email" placeholder="Enter your email" className="mr-2 mb-2 mb-md-3 w-50" />
              <Button variant="primary">Subscribe</Button>
            </Form>
          </Col>
          <Col md={3}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li className='mb-md-3'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li className='mb-md-3'>exclusive@gmail.com</li>
              <li className='mb-md-3'>+88015-88888-9999</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li  className='mb-md-1'><a href="#my-account" className="text-white">My Account</a></li>
              <li   className='mb-md-1'><a href="#login-register" className="text-white">Login / Register</a></li>
              <li   className='mb-md-1'><a href="#cart" className="text-white">Cart</a></li>
              <li  className='mb-md-1'><a href="#wishlist" className="text-white">Wishlist</a></li>
              <li   className='mb-md-1'><a href="#shop" className="text-white">Shop</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li className='mb-md-1'><a href="#privacy-policy" className="text-white">Privacy Policy</a></li>
              <li className='mb-md-1'><a href="#terms-of-use" className="text-white">Terms Of Use</a></li>
              <li className='mb-md-1'><a href="#faq" className="text-white">FAQ</a></li>
              <li className='mb-md-1'><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Download App</h5>
            <ul className="list-unstyled">
              <li className='mb-md-1'>Save $3 with App New User Only</li>
              <li className='mb-md-1'><img src={googleplay} style={{width:'100px'}} alt="Google Play" /></li>
              <li className='mb-md-1'><img src={appleStore}  style={{width:'100px'}} alt="App Store" /></li>
              <li>
                <div className="d-flex justify-content-between mt-4 ">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
