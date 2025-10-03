import "./App.css";
import IntroText from "./BitsStore/IntroText";
import { AiFillEdit } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroStyle from "./BitsStore/Aurora";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <>
      <HeroStyle className="aurora-container" />
      <IntroText className="introText" />
      <div className="inputContainer">
        <input
          type="text"
          placeholder="what's in your mind..."
          className="input"
        />
        <button className="input-btn" type="button">
          <AiFillEdit />
        </button>

      </div>
      <TodoItems/>
    
    </>
  );
}

export default App;
