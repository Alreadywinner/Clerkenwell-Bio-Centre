import React, { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import Questions from "./Questions";

export default function Home() {
  const [showApply, setShowApply] = useState(false);

  let done = false;

  const speed = 30;
  const txt1 =
    "Experts in clinical biophysical research and hardware development.";
  const txt2 =
    "For the first time, we are welcoming a limited amount of carefully selected subjects to our research centre. Our newest invention - a machine unlike anything on the market - promotes unprecedented reparative attributes in human subjects. To apply to be a trialist, please fill in the form below.";

  useEffect(() => {

    function typeWriter() {
        let i = 0;
        const interval = setInterval(() => {
          if (i < txt1.length) {
            document.getElementById("typewriter1").innerHTML += txt1.charAt(i);
            i++;
          } else {
            clearInterval(interval);
            typeWriter1();
          }
        }, speed);
    }


    function typeWriter1() {
        let i = 0;
        const interval = setInterval(() => {
          if (i < txt2.length) {
            document.getElementById("typewriter2").innerHTML += txt2.charAt(i);
            i++;
          } else {
            clearInterval(interval);
            document
              .getElementsByClassName("video")[0]
              .classList.add("display-block");
            done = true; // Set done flag to true after both animations complete
            setShowApply(true); // Set showApply to true after both animations complete
            localStorage.setItem("showApply", "true");
          }
        }, speed);
    }
    if(!done) {
        done = true;
        typeWriter();
    }
  }, []);
  return (
    <div className="text-center app-background">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1 style={{ fontSize: "50px" }} className="text-white">
        Welcome to Clerkenwell Bio Centre
      </h1>
      <h3 id="typewriter1" className="text-white mt-4"></h3>
      <h3
        id="typewriter2"
        className="typewriter text-white mt-4"
        style={{ fontSize: "20px", fontWeight: "300" }}
      ></h3>
      <section className="video mt-4" style={{ display: "none" }}>
        <video
          controls
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ></video>
      </section>
      <section className="action">{showApply && <Questions />}</section>
    </div>
  );
}
