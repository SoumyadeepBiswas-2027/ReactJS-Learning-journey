import "./App.css";
import IntroText from "./BitsStore/IntroText";
//import { AiFillEdit } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroStyle from "./BitsStore/Aurora";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <HeroStyle className="aurora-container" />
      <IntroText className="introText" />
      <AddTodo />
      <TodoItems />
    </>
  );
}

export default App;
