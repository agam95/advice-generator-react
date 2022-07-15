import { ReactComponent as Dicesvg } from "./icon-dice.svg";
import React from "react";

function Dice({ button }) {
  return (
    <button className="circle" onClick={button}>
      <Dicesvg />
    </button>
  );
}

export default Dice;
