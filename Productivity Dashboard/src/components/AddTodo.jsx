import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

function AddTodo({ handleonChange }) {
  const [inputValue, setInputValue] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonClicked = () => {
    if (inputValue === "") return;
    handleonChange({ text: inputValue, datetime: dateTime });
    setInputValue("");
    setDateTime("");
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="what's in your mind..."
        className="input"
      />

      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        className="input-DateTime"
      />

      <button
        className="input-btn"
        type="button"
        onClick={handleAddButtonClicked}
      >
        <AiFillEdit />
      </button>
    </div>
  );
}

export default AddTodo;
