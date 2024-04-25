import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Ticket = () => {
  const [code, setCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [booked, setBooked] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const handleInputChange = (e) => {
    setCode(e.target.value);
    setIsCodeValid(e.target.value.length === 6);
  };

  const handleCodeConfirmation = () => {
    if (!isCodeValid) {
      alert('Please enter a valid 6-digit code.');
      return;
    }
    setShowDate(true);
    setIsConfirmed(true);
    setIsFree(code.startsWith('1')); // Assuming codes starting with '1' are free
  };

  const handlePayment = () => {
    window.location.href = 'STRIPE_PAYMENT_URL';
  };

  const handleConfirmBooking = () => {
    setBooked(true);
  }

  const getDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className='app-background'>
    <Container className="mt-5">
        {!booked && (
      <Row>
        <Col  md={{ span: 6, offset: 3 }}>
          <h2 className="text-center text-white mb-4">Enter Code</h2>
          <Form>
            <Form.Group controlId="formCode">
              <Form.Control
                type="text"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={handleInputChange}
                className="mb-3"
              />
            </Form.Group>
            <button className="animated-button mt-4" type="button" onClick={handleCodeConfirmation}>
            <span>Confirm Code</span>
            <span></span>
            </button>
          </Form>
        </Col>
      </Row>
    )}
      {isConfirmed && (
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Alert variant="success">
                {!booked ? (
                    <div>
              <h3 className="text-center mb-4">Vegetables Showcase @ Clerkenwell Bio Centre</h3>
              <p>Congratulations, your application for Vegetables has been successful. You are booked to come to our showcase on:</p>
              <b><p className="mb-4">{showDate && `Date: ${getDate()}`}</p></b>
              <p className='pb-3'>To confirm your attendance to this trial, please follow the steps:</p>
              {isFree ? (
                <>
                  <button onClick={handleConfirmBooking} className="btn btn-success">Confirm Booking</button>
                </>
              ) : (
                <>
                  <p>The amount you owe will be dependent on the code you were given.</p>
                  <Button variant="success" onClick={handlePayment} block>
                    Confirm Booking
                  </Button>
                </>
              )}
              </div>
              ) : (
                <>
                <h5>CONGRATULATIONS, YOUR ATTENDANCE HAS BEEN CONFIRMED. WE LOOK FORWARD TO YOUR VISIT TO OUR RESEARCH CENTRE.</h5>
                </>
              )}
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
    </div>
  );
};

export default Ticket;
