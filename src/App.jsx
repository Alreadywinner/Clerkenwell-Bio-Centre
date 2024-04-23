import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";

function App() {

  const generateRandomCode = () => {
    // Generate random alphanumeric characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomCode = '';
    for (let i = 0; i < 6; i++) {
      randomCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    // Display the generated code
    document.getElementById('code').value = randomCode;
  }

  return (
    // <div>
    //   <div className="wave-group">
    //       <input required type="text" id="code" className="input" />
    //       <span className="bar"></span>
    //       <label className="label">
    //         <span className="label-char" style={{ '--index': 0 }}>C</span>
    //         <span className="label-char" style={{ '--index': 1 }}>o</span>
    //         <span className="label-char" style={{ '--index': 2 }}>d</span>
    //         <span className="label-char" style={{ '--index': 3 }}>e</span>
    //       </label>
    //     </div>
    //     <button className="animated-button mt-4" onClick={() => generateRandomCode()}>
    //       <span>Generate Code</span>
    //       <span></span>
    //     </button>
    //   </div>
    <div>
      <Home />
    </div>
  );

  
}

export default App;
