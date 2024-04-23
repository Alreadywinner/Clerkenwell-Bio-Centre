import { useState } from "react";
import { Modal, Button, Form, FormGroup, Dropdown } from "react-bootstrap";
import "./App.css";

function Questions() {
  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [otherCondition, setOtherCondition] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTrialOption, setSelectedTrialOption] = useState("");
  const [error, setError] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentQuestion(1); // Reset to the first question
    setSelectedCondition("");
    setOtherCondition("");
    setUserName("");
    setEmail("");
    setSelectedTrialOption("");
    setError("");
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleNextQuestion = () => {
    switch (currentQuestion) {
      case 1:
        if (!userName.trim()) {
          setError("Please enter your name");
          return;
        }
        break;
      case 2:
        if (
          !selectedCondition ||
          (selectedCondition === "Other" && !otherCondition.trim())
        ) {
          setError("Please select a condition");
          return;
        }
        break;
      case 3:
        if (!selectedTrialOption) {
          setError("Please select at least one trial option");
          return;
        }
        break;
      case 4:
        if (!email.trim()) {
          setError("Please enter your email address");
          return;
        }
        if (!isValidEmail(email.trim())) {
          setError("Please enter a valid email address");
          return;
        }
        break;
      default:
        break;
    }
    setCurrentQuestion((prev) => prev + 1);
    setError("");
  };

  const handleConditionChange = (condition) => {
    setSelectedCondition(condition);
  };

  const handleOtherConditionChange = (e) => {
    setOtherCondition(e.target.value);
  };

  const handleTrialOptionChange = (option) => {
    setSelectedTrialOption(option);
  };

  const isValidEmail = (email) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return (
          <div>
            <p>What's your name?</p>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        );
      case 2:
        return (
          <div>
            <p>
              Do you have any of the following? Please click on all that apply.
            </p>
            <Dropdown>
              <Dropdown.Toggle className="w-100">
                {selectedCondition ? selectedCondition : "Select condition"}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                {[
                  "ADHD",
                  "Chronic Gout",
                  "Herpes Simplex",
                  "Weak Bladder",
                  "Attention-Seeking Disorder",
                  "Pruritus Ani",
                  "Baldness",
                  "Sexual Anxiety",
                  "Internet Addiction",
                  "Muscle Dysmorphia",
                  "Impotence",
                  "Foot Odour",
                  "Nail Fungus",
                  "Other",
                ].map((condition, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleConditionChange(condition)}
                  >
                    {condition}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            {selectedCondition === "Other" && (
              <Form.Control
                type="text"
                placeholder="Specify other condition"
                value={otherCondition}
                onChange={handleOtherConditionChange}
              />
            )}
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        );
      case 3:
        return (
          <div>
            <p>
              Please choose all trials you would be able to attend. We are based
              in Clerkenwell. The more you choose, the more likely you will be
              offered a slot.
            </p>
            <Dropdown>
              <Dropdown.Toggle className="w-100">
                {selectedTrialOption ? selectedTrialOption : "Select Slot"}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                {[
                  "Saturday 8th: 8pm",
                  "Sunday 9th: 4pm",
                  "Sunday 9th: 8pm",
                  "Tuesday 11th: 8pm",
                  "Wednesday 12th: 8pm",
                  "Thursday 13th: 4pm",
                  "Thursday 13th: 8pm",
                  "Friday 14th: 8pm",
                  "Saturday 15th: 4pm",
                  "Saturday 15th: 8pm",
                  "Sunday 16th: 4pm",
                  "Sunday 16th: 8pm",
                  "Tuesday 18th: 8pm",
                  "Wednesday 19th: 8pm",
                  "Thursday 20th: 8pm",
                  "Friday 21st: 1 show 8pm",
                  "Saturday 22nd: 4pm",
                  "Saturday 22nd: 8pm",
                  "Sunday 23rd: 4pm",
                  "Sunday 23rd: 8pm",
                ].map((option, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleTrialOptionChange(option)}
                  >
                    {option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        );
      case 4:
        return (
          <FormGroup>
            <p>What is your email address?</p>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-danger mt-2">{error}</p>}
          </FormGroup>
        );
      default:
        return (
          <p>
            Thank you for submitting your application to be a trialist at
            VEGETABLES. We will email you very soon to let you know if you have
            been successful.
          </p>
        );
    }
  };

  return (
    <div className="mt-3">
      <button
        className="animated-button mt-4 mb-5 mt-3"
        onClick={handleShowModal}
      >
        <span>Apply</span>
        <span></span>
      </button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Apply Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderQuestion()}</Modal.Body>
        <Modal.Footer>
          {currentQuestion !== 5 && (
            <Button variant="primary" onClick={handleNextQuestion}>
              Next
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Questions;
