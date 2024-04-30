import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const [code, setCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [booked, setBooked] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleCodeConfirmation = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/validate-code`;
      // Make the POST request to the backend API
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
        }),
      });

      // Check if request was successful
      if (response.ok) {
        const data = await response.json();
        // Check if userData exists and expiryDateTime is valid
        if (data.userData && data.userData.expiryDateTime) {
          const expiryDateTime = new Date(data.userData.expiryDateTime);
          const currentDateTime = new Date();

          // Check if expiryDateTime is after currentDateTime
          if (expiryDateTime > currentDateTime) {
            setUserData(data.userData);
            // Handle valid expiration
            setIsCodeValid(true);
            setShowDate(true);
            setIsConfirmed(true);
            if (data.userData.price === "free") {
              setIsFree(true);
            }
          } else {
            alert("The code has expired.");
            // Handle code expiration
          }
        } else {
          // Handle missing expiryDateTime
          alert("Expiration data not found.");
        }
      } else {
        // Handle error response
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleConfirmBooking = async () => {
    // Define the backend API URL
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/confirm-booking`;
    // Prepare the request body
    const requestBody = {
      id: userData.userId, // Replace with the user ID you want to confirm booking for
    };

    // Prepare the fetch options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    // Perform the fetch request
    fetch(apiUrl, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse response body as JSON
      })
      .then((data) => {
        setBooked(true);
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
        alert("An error occurred. Please try again.");
        // Optionally, you can show an error message to the user or retry the request, etc.
      });
  };

  return (
    <div className="app-background">
      <Container className="mt-5">
        {!isCodeValid && (
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2 className="text-center text-white mb-4">Enter Code</h2>
              <Form>
                <Form.Group controlId="formCode">
                  <Form.Control
                    type="text"
                    placeholder="Enter your code"
                    value={code}
                    onChange={handleInputChange}
                    className="mb-3"
                  />
                </Form.Group>
                <button
                  className="animated-button mt-4"
                  type="button"
                  onClick={handleCodeConfirmation}
                >
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
                    <h3 className="text-center mb-4">
                      Vegetables Showcase @ Clerkenwell Bio Centre
                    </h3>
                    <p>
                      Congratulations, your application for Vegetables has been
                      successful. You are booked to come to our showcase on:
                    </p>
                    <b>
                      <p className="mb-4">
                        {showDate && `Date: ${userData.selectedSlot}`}
                      </p>
                    </b>
                    <p className="pb-3">
                      To confirm your attendance to this trial, please follow
                      the steps:
                    </p>
                    {isFree ? (
                      <>
                        <button
                          onClick={handleConfirmBooking}
                          className="btn btn-success"
                        >
                          Confirm Booking
                        </button>
                      </>
                    ) : (
                      <>
                        <p>The amount you owe : {`${userData.price}`}</p>
                        <Button
                          variant="success"
                          onClick={handleConfirmBooking}
                        >
                          Confirm Booking
                        </Button>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <h5>
                      CONGRATULATIONS, YOUR ATTENDANCE HAS BEEN CONFIRMED. WE
                      LOOK FORWARD TO YOUR VISIT TO OUR RESEARCH CENTRE.
                    </h5>
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
