import "./App.css";
import IntroText from "./BitsStore/IntroText";
import { AiFillEdit } from "react-icons/ai";

function App() {
  return (
    <>
    <IntroText className="introText"/>

      <div className="inputContainer">
        <input type="text" placeholder="what's in your mind..."
        className="input"/>
        <AiFillEdit className="btn" />
      </div>

    </>
  );
}

export default App;
