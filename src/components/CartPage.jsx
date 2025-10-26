import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useCart } from "react-use-cart";
import transition from './transitoin';

const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
      } = useCart();
      if (isEmpty) return ( 
        <div className='d-flex flex-column justify-content-center align-items-center '>
            <h3>Carts</h3>
      <h1>Your cart is empty</h1>
      </div>
      )
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Cart</h2>
      <Row>
     
        <Col xs={12} md={8}>
    
        {items.map((item) => (
          <div className="cart-item mb-4">
            <Row className="align-items-center">
              <Col xs={6} md={6}>
                <img src={item.image}alt={item.title} style={{width:'20%'}} />
                <h5>{item.title}</h5>
                <p> {item.price} </p>
              </Col>
              <Col xs={6} md={3} className="d-flex justify-content-center mb-2">
                <Button variant="outline-dark"    onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)} className="mr-2">-</Button>
                <Form.Control type="text" value={item.quantity} readOnly className="text-center" style={{ width: '50px' }} />
                <Button variant="outline-dark" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)} className="ml-2">+</Button>
              </Col>
              <Col xs={12} md={3} className="text-right">
                <p>{item.quantity * item.price}</p>
              </Col>
            </Row>
          </div>
            ))}
        
          
          <Button variant="outline-secondary" className="mb-3">Return To Shop</Button>
          <Button variant="outline-secondary" className="mb-3 ml-3">Update Cart</Button>
        </Col>

        <Col xs={12} md={4} className="mt-4 mt-md-0">
          <div className="cart-summary p-3 border">
            <h5>Cart Total</h5>
            <div className="d-flex justify-content-between mb-2">
              <p>Subtotal:</p>
              <p>{cartTotal}</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <h5>Total:</h5>
              <h5>{cartTotal}</h5>
            </div>
            <Button variant="danger" className="w-100">Proceed to Checkout</Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12} md={8}>
          <Form>
            <Form.Group controlId="formCouponCode">
              <Form.Label>Coupon Code</Form.Label>
              <Form.Control type="text" placeholder="Enter Coupon Code" />
            </Form.Group>
            <Button variant="danger">Apply Coupon</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default  Cart;
