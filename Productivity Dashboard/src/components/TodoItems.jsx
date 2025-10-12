import { AiFillDelete } from "react-icons/ai";
import { Complete } from "./Complete";

function TodoItems({ value, onDelete }) {
  return (
    <div className="listContainer">
      <ul className="list-group">
        {value.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <li className="list-group-item">
              
              <span className="item-text">{item.text}</span>

              <br />

              <small className="item-datetime-local">
                Due: {new Date(item.datetime).toLocaleString()}
              </small>

            </li>

            <button
              className="Delete-Btn"
              onClick={() => {
                onDelete(item);
              }}
            >
              <AiFillDelete />
            </button>

            <Complete></Complete>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TodoItems;
