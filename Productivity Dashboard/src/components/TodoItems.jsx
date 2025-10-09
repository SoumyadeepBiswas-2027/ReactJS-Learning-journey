import { AiFillDelete } from "react-icons/ai";

function TodoItems({ value, onDelete }) {
  return (
    <div className="listContainer">
      <ul className="list-group">
        {value.map((item, index) => (
          <li key={index} className="list-group-item" style={{ display: "flex", alignItems: "center" }}>
            <span className="item-text" style={{ flex: 1 }}>{item}</span>
            <button
              className="Delete-Btn"
              onClick={() => {
                onDelete(item);
              }}
            >
              <AiFillDelete />
            </button>
            <button className="Complete-Btn">Right</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoItems;
