import { useState } from "react";
import "./App.css";
import { ChildComponent } from "./Components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <div>Count: {count}</div>
      <br />
      <button onClick={handleClick}>Increment</button>
      <br /> <br />
      <div>
        <ChildComponent 
        buttonName="Click me"
        handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
