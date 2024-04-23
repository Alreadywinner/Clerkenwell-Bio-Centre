import { useState } from "react";

function CodeGenerate() {
  const [code, setCode] = useState('');

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomCode = '';
    for (let i = 0; i < 6; i++) {
      randomCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCode(randomCode);
  }

  return (
    <div style={{
        backgroundColor: '#242424'
    }}className='d-flex align-items-center justify-content-center flex-column'>
      <div className="wave-group mt-5">
        <input required type="text" value={code} className="input" />
        <span className="bar"></span>
        <label className="label">
          <span className="label-char" style={{ '--index': 0 }}>C</span>
          <span className="label-char" style={{ '--index': 1 }}>o</span>
          <span className="label-char" style={{ '--index': 2 }}>d</span>
          <span className="label-char" style={{ '--index': 3 }}>e</span>
        </label>
      </div>
      <button className="animated-button mt-4" onClick={generateRandomCode}>
        <span>Generate Code</span>
        <span></span>
      </button>
    </div>
  );
}

export default CodeGenerate;

