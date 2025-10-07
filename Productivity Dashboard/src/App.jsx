import "./App.css";
import IntroText from "./BitsStore/IntroText";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroStyle from "./BitsStore/Aurora";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import EmptyText from "./BitsStore/EmptyText";

function App() {
  const [todos, setTodos] = useState([]);

  const handleonChange = (newTodoText) => {
    const newTodoItems= [...todos,newTodoText];
    setTodos(newTodoItems)
  };
  const handleDeleteButtonClicked =( todoToDelete)=>{
  const newTodos = todos.filter(todo => todo !== todoToDelete);
  setTodos(newTodos);
  }

  return (
    <>
      <HeroStyle className="aurora-container" />
      <IntroText className="introText" />
      <AddTodo handleonChange={handleonChange} />
      {todos.length === 0 ? (
        <div  style={{marginTop: '20px',marginLeft: '20px',display: 'inline-block'}}>
          <EmptyText hoverIntensity={0.5} />
        </div>
      ) : (
        <TodoItems value={todos} onDelete={ handleDeleteButtonClicked }/>
      )}

    </>
  );
}

export default App;
