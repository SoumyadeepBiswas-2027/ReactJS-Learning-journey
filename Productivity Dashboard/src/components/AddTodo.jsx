import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

function AddTodo({handleonChange}) {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddButtonClicked =() =>{
    handleonChange(inputValue);
    setInputValue("");
  }

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="what's in your mind..."
        className="input"
      />
      <button className="input-btn" type="button" onClick={handleAddButtonClicked}>
        <AiFillEdit />
      </button>
    </div>
  );
}

export default AddTodo;