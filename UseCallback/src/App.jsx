// import { useCallback, useState } from "react";
import "./App.css";
import ExpensiveComponent from "./Components/ExpensiveComponent";
// import { ChildComponent } from "./Components/ChildComponent";

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <ExpensiveComponent/>
    // <div>
    //   <div>Count: {count}</div>
    //   <br />
    //   <button onClick={handleClick}>Increment</button>
    //   <br /> <br />
    //   <div>
    //     <ChildComponent buttonName="Click me" handleClick={handleClick} />
    //   </div>
    // </div>
  );
}

export default App;
