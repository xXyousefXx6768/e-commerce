import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import transition from './transitoin';

const Contact = ({ onNavigate }) => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Contact Us</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Call To Us</Card.Title>
              <Card.Text>
                We are available 24/7, 7 days a week.
                <br />
                Phone: +8801611112222
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Write To Us</Card.Title>
              <Card.Text>
                Fill out our form and we will contact you within 24 hours.
                <br />
                Emails: customer@exclusive.com
                <br />
                support@exclusive.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Your Email" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Your Phone</Form.Label>
                <Form.Control type="tel" placeholder="Your Phone" required />
              </Form.Group>
            </Row>

            <Form.Group controlId="formGridMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your Message" required />
            </Form.Group>

            <Button variant="danger" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default  Contact ;
