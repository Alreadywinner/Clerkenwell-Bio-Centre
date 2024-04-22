import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Welcome to Clerkenwell Bio Centre</h1>
      <h3>
        Experts in clinical biophysical research and hardware development.
      </h3>
      <h3>
        For the first time, we are welcoming a limited amount of carefully
        selected subjects to our research centre. Our newest invention - a
        machine unlike anything on the market - promotes unprecedented
        reparative attributes in human subjects. To apply to be a trialist,
        please fill in the form below.
      </h3>
      <h4>This product showcase is called:</h4>
      <h4>VEGETABLES.</h4>
      <h4>{`[Video]`}</h4>
      <div className="card"></div>
    </div>
  );
}

export default App;
