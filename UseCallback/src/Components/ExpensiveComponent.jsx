import React, { useState, useCallback, useRef } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // store the previous function reference
  const prevFuncRef = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  // check if function changed compared to previous render
  if (prevFuncRef.current === expensiveCalculation) {
    console.log("❌ Function NOT recreated");
  } else {
    prevFuncRef.current = expensiveCalculation;
    console.log("✅ Function RECREATED");
    //prevFuncRef.current = expensiveCalculation;
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Expensive Calculation Result: {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default ExpensiveComponent;
