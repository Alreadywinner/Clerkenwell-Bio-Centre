import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function CodeGenerate() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [selectedTrialOption, setSelectedTrialOption] = useState("");
  const [price, setPrice] = useState("");
  const [expiryDateTime, setExpiryDateTime] = useState("");

  const generateRandomCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomCode = "";
    for (let i = 0; i < 6; i++) {
      randomCode += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCode(randomCode);
  };

  const handleTrialOptionChange = (option) => {
    setSelectedTrialOption(option);
  };

  const handlePriceOptionChange = (option) => {
    setPrice(option);
  };

  const handleExpiryDateTimeChange = (e) => {
    setExpiryDateTime(e.target.value);
  };

  return (
    <div className="app-background text-white questionnaire-container flex-column align-items-center">
      <div className="question-container">
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
        <Dropdown className="mt-3">
          <Dropdown.Toggle className="w-100">
            {price ? price : "Select Price"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {["free", "£10", "£40"].map((option, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handlePriceOptionChange(option)}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {error && <p className="text-danger mt-2">{error}</p>}
        {/* Input for expiry date and time */}
        <input
          type="datetime-local"
          value={expiryDateTime}
          onChange={handleExpiryDateTimeChange}
          className="mt-3 text-black date-time-input"
        />

        <div className="wave-group mt-5">
          <input
            required
            type="text"
            value={code}
            className="input text-white"
          />
          <span className="bar text-white"></span>
          <label className="label">
            <span className="label-char" style={{ "--index": 0 }}>
              C
            </span>
            <span className="label-char" style={{ "--index": 1 }}>
              o
            </span>
            <span className="label-char" style={{ "--index": 2 }}>
              d
            </span>
            <span className="label-char" style={{ "--index": 3 }}>
              e
            </span>
          </label>
        </div>

        <button className="animated-button mt-4" onClick={generateRandomCode}>
          <span>Generate Code</span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default CodeGenerate;
