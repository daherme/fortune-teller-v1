import Video from "./videos/video1.mp4";
import "./style.css";
import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
  }

  return (
    <div className="container">
      <video autoPlay muted loop className="myVideo">
        <source src={Video} type="video/mp4"></source>
      </video>
      <div className="content">
        <h1>FORTUNE TELLER</h1>
        <div className="adviceContainer">
          <p className="advice">{advice}</p>
          <button className="button" onClick={getAdvice}>
            Get some advice..
          </button>
        </div>
      </div>
    </div>
  );
}
