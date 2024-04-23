import React, { useEffect } from 'react'
import viteLogo from '/vite.svg'

export default function Home() {
    var i = 0;
    var j=0;
    var done = 0;
    var done1 = 0;
    const speed = 30;
    const txt = "Experts in clinical biophysical research and hardware development.";
    const txt2 = "For the first time, we are welcoming a limited amount of carefully selected subjects to our research centre. Our newest invention - a machine unlike anything on the market - promotes unprecedented reparative attributes in human subjects. To apply to be a trialist, please fill in the form below.";
    useEffect(() => {
        function typeWriter() {
            if (i < txt.length) {
              document.getElementById("typewriter1").innerHTML += txt.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            } else {
                i = 0;
                typeWriter1();
            }
        }
        function typeWriter1() {
            if (i < txt2.length) {
              document.getElementById("typewriter2").innerHTML += txt2.charAt(i);
              i++;
              setTimeout(typeWriter1, speed);
            } else {
                document.getElementsByClassName("video")[0].classList.add('display-block');
            }
        }
        if(done != 0) {
            typeWriter();
            done++;
        } else {
            done++;
        }
    },[])
  return (
    <div className='text-center'>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1 style={{fontSize: '50px'}}>Welcome to Clerkenwell Bio Centre</h1>
      {/* <h3>
        Experts in clinical biophysical research and hardware development.
      </h3> */}
        <h3 id='typewriter1'></h3>
        <h3 id="typewriter2" className="typewriter"></h3>
      <section className='video' style={{display: 'none'}}>
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
      </section>
      <section className="action">
      <button className="animated-button mt-4" onClick={() => applyAction()}>
           <span>Apply</span>
           <span></span>
         </button>
      </section>
    </div>
  )
}
