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
            <li className="list-group-item" style={{ flex: 1 }}>
              <span className="item-text">{item}</span>
            </li>

            <button className="Delete-Btn" onClick={() => {onDelete(item);}}>
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
