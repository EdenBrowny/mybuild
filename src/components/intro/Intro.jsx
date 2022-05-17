import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator "],
    });
  }, []);
  return (
    <div className="Intro" id="Intro">
      <div className="left-part">
        <div className="imgContainer">
          <img src="assets/Eden..jpg" alt=""></img>
        </div>
      </div>
      <div className="right-part">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Edens Tech</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#Portfolio">
          <img src="assets/down-arrow-5.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}
