import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import Transition from './transitoin';
import { useEffect } from 'react';


const MyAccount = () => {

  useEffect(() => {
    
    
  }, []);
  return (
    <Container className="my-5">
      <Row>
        
        <Col md={9}>
          <h2>Edit Your Profile</h2>
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" value="Md" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" value="Rimel" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value="rimel111@gmail.com" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" value="Kingston, 5236, United State" />
              </Form.Group>
            </Row>

            <Form.Group controlId="formGridPasswordCurrent">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" placeholder="Current Password" />
            </Form.Group>

            <Form.Group controlId="formGridPasswordNew">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" />
            </Form.Group>

            <Form.Group controlId="formGridPasswordConfirm">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm New Password" />
            </Form.Group>

            <Button  variant="secondary" type="button" className=" mt-2 mx-2">
              Cancel
            </Button>
            <Button className='mt-2' variant="danger" type="submit">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default  MyAccount;
