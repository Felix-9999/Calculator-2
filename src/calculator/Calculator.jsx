import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [calc, setcalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setcalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const createNumber = () => {
    const numArr = [];
    for (let i = 1; i < 9; i++) {
      numArr.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return numArr;
  };

  const calculator = () => {
    setcalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const newValue = calc.slice(0, -1);
    setcalc(newValue);
  };
  const deleteAll = () => {
    setResult("0");
    setcalc("");
  };

  return (
    <div className="Calculator">
      <div className="calculator-global-div">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="operations">
          <button onClick={() => updateCalc("/")}>÷</button>
          <button onClick={() => updateCalc("*")}>×</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={deleteLast}>DEL</button>
          <button onClick={deleteAll}>C</button>
        </div>
        <div className="digits">
          {createNumber()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculator}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
