import "./App.css";
import IntroText from "./components/IntroText";

function App() {
  return (
    <>
    <IntroText></IntroText>
      <div className="inputContainer">
        <input type="text" placeholder="Let's make a productive day...;)"
        className="input"/>
      </div>

    </>
  );
}

export default App;
