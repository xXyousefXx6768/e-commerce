import React from 'react';
import { useCart } from 'react-use-cart';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import transition from './transitoin';

const Checkout = () => {
  const { items } = useCart();
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h2 className="text-center">Billing Details</h2>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group controlId="formCompanyName" className="mt-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" />
            </Form.Group>

            <Form.Group controlId="formStreetAddress" className="mt-3">
              <Form.Label>Street Address*</Form.Label>
              <Form.Control type="text" placeholder="Street Address" />
            </Form.Group>

            <Form.Group controlId="formApartment" className="mt-3">
              <Form.Label>Apartment, floor, etc. (optional)</Form.Label>
              <Form.Control type="text" placeholder="Apartment, floor, etc. (optional)" />
            </Form.Group>

            <Form.Group controlId="formTownCity" className="mt-3">
              <Form.Label>Town/City*</Form.Label>
              <Form.Control type="text" placeholder="Town/City" />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mt-3">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group controlId="formEmailAddress" className="mt-3">
              <Form.Label>Email Address*</Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>

            <Form.Group controlId="formSaveInfo" className="mt-3">
              <Form.Check type="checkbox" label="Save this information for faster check-out next time" />
            </Form.Group>
          </Form>
        </Col>
        <Col md={5}>
          <div className="order-summary p-3 bg-light">
            <h4>Order Summary</h4>
            {items.map((item) => (
            <div className="d-flex justify-content-between mt-3">
              <img src={item.image} alt={item.title} style={{width:'10%'}} />
              <span>{item.title}</span>
              <span>{item.price}</span>
            </div>
             ))}
            <hr />
            <h5>Payment Method</h5>
            <Form>
              <Form.Check type="radio" name="paymentMethod" label="Bank" />
              <Form.Check type="radio" name="paymentMethod" label="Cash on delivery" className="mt-2" />
            </Form>
            <hr />
            <InputGroup className="mb-3">
              <FormControl placeholder="Coupon Code" />
              <Button variant="outline-secondary">Apply Coupon</Button>
            </InputGroup>
            <Button variant="danger" className="w-100">Place Order</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default  Checkout

