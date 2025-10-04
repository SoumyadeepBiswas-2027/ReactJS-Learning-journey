import "./App.css";
import IntroText from "./BitsStore/IntroText";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroStyle from "./BitsStore/Aurora";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [initialVal , setTodoVal] = useState([]);

    if (initialVal.length === 0){
      console.log("No val");
    }
  
  return (
    <>
      <HeroStyle className="aurora-container" />
      <IntroText className="introText" />
      <AddTodo />
      <TodoItems  value={initialVal}/>
    </>
  );
}

export default App;
