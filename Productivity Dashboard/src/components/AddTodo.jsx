import { AiFillEdit } from "react-icons/ai";

function AddTodo() {
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="what's in your mind..."
        className="input"
      />
      <button className="input-btn" type="button" onClick={()=> {console.log("working");}}>
        <AiFillEdit />
      </button>
    </div>
  );
}

export default AddTodo;
