import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function CodeGenerate() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [selectedTrialOption, setSelectedTrialOption] = useState("");
  const [price, setPrice] = useState("");
  const [expiryDateTime, setExpiryDateTime] = useState("");

  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validateFutureDateTime = (dateTimeString) => {
    // Parse the input date/time string to a Date object
    const inputDateTime = new Date(dateTimeString);
    
    // Get the current date/time
    const currentDateTime = new Date();

    // Check if the input date/time is in the future
    return inputDateTime >= currentDateTime;
}

  const generateRandomCode = () => {
    // const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // let randomCode = "";
    // for (let i = 0; i < 6; i++) {
    //   randomCode += characters.charAt(
    //     Math.floor(Math.random() * characters.length)
    //   );
    // }
    // setCode(randomCode);
    if(selectedTrialOption == '') {
      setError('hello');
    } else if (price == '') {
      setError('hello1');
    } else if (expiryDateTime == '') {
      setError('hello2');
    } else if (!validateFutureDateTime(expiryDateTime)) {
      setError('hello3');
    } else if (email == '') {
      setError('hello4');
    } else if (!validateEmail(email)) {
      setError('hello4');
    } else {

    }
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form action="">
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
        {/* Input for expiry date and time */}
        <input
          type="datetime-local"
          value={expiryDateTime}
          onChange={handleExpiryDateTimeChange}
          className="mt-3 text-black date-time-input"
        />

        <input
          type="email"
          required
          value={email}
          placeholder="Enter Email"
          onChange={handleEmailChange}
          className="mt-3 text-black email-input form-control"
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

        {error && <p className="text-danger mt-4">{error}</p>}

        <button className="animated-button mt-4" type="button" onClick={generateRandomCode}>
          <span>Generate Code</span>
          <span></span>
        </button>
      </div>
    </div>
    </form>
  );
}

export default CodeGenerate;
