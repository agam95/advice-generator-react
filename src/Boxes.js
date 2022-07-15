import Dice from "./Dice.js";
import { ReactComponent as Patterndivider } from "./pattern-divider-mobile.svg";
import React, { useState } from "react";

function Boxes() {
  const [apiText, setApiText] = useState("Click on Dice for an advice.");
  const [apiAdvice, setApiAdvice] = useState("1");
  function button() {
    async function getUrl() {
      const url = "https://api.adviceslip.com/advice";
      const response = await fetch(url);
      const data = await response.json();

      setApiText(data.slip.advice);
      setApiAdvice(data.slip.id);
    }
    getUrl();
  }

  return (
    <div className="box">
      <p className="header">Advice #{apiAdvice}</p>
      <p className="advice">{apiText}</p>
      <Patterndivider />
      <Dice className="dice" button={button} />
    </div>
  );
}

export default Boxes;
