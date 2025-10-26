import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faGift, faDollarSign, faTruck, faHeadset, faUndo } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, useInView } from 'framer-motion';
import img5 from './assets/5.webp';
import img6 from './assets/6.png';
import img7 from './assets/7.webp';
import img8 from './assets/8.png';
import transition from './transitoin';

const AboutUs = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <Container className="my-5" ref={containerRef}>
      <motion.div
        className="mb-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <Row>
          <Col className='align-self-center' md={6}>
            <h2>Our Story</h2>
            <p>
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands
              and serves 3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer products to high-end electronics.
            </p>
          </Col>
          <Col md={6}>
            <img src={img5} alt="Our Story" className="img-fluid" />
          </Col>
        </Row>
      </motion.div>

      <motion.div
        className="text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Row>
          <Col md={3}>
            <FontAwesomeIcon icon={faUser} size="2x" />
            <h4>10.5k</h4>
            <p>Sellers active on our site</p>
          </Col>
          <Col md={3}>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            <h4>33k</h4>
            <p>Monthly Product Sale</p>
          </Col>
          <Col md={3}>
            <FontAwesomeIcon icon={faGift} size="2x" />
            <h4>45.5k</h4>
            <p>Customers active on our site</p>
          </Col>
          <Col md={3}>
            <FontAwesomeIcon icon={faDollarSign} size="2x" />
            <h4>25k</h4>
            <p>Annual gross sale in our site</p>
          </Col>
        </Row>
      </motion.div>

      <motion.div
        className="mt-5"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Row>
          <Col md={4} className="text-center">
            <Card className="p-3">
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title>Tom Cruise</Card.Title>
                <Card.Text>Founder & Chairman</Card.Text>
                <div>
                  <FontAwesomeIcon icon={faTwitter} className="me-2" />
                  <FontAwesomeIcon icon={faInstagram} className="me-2" />
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="p-3">
              <Card.Img variant="top" src={img7} />
              <Card.Body>
                <Card.Title>Emma Watson</Card.Title>
                <Card.Text>Managing Director</Card.Text>
                <div>
                  <FontAwesomeIcon icon={faTwitter} className="me-2" />
                  <FontAwesomeIcon icon={faInstagram} className="me-2" />
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="p-3">
              <Card.Img variant="top" src={img8} />
              <Card.Body>
                <Card.Title>Will Smith</Card.Title>
                <Card.Text>Product Designer</Card.Text>
                <div>
                  <FontAwesomeIcon icon={faTwitter} className="me-2" />
                  <FontAwesomeIcon icon={faInstagram} className="me-2" />
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>

      <motion.div
        className="mt-5 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Row>
          <Col md={4}>
            <FontAwesomeIcon icon={faTruck} size="2x" />
            <h5>Free and Fast Delivery</h5>
            <p>Free delivery for all orders over $140</p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faHeadset} size="2x" />
            <h5>24/7 Customer Service</h5>
            <p>Friendly 24/7 customer support</p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faUndo} size="2x" />
            <h5>Money Back Guarantee</h5>
            <p>We return money within 30 days</p>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default AboutUs
