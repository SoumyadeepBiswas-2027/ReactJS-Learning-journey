function TodoItems({ value }) {
  return (
    <div className="listContainer">
      <ul className="list-group">
        {value.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>

            <li className="list-group-item" style={{ flex: 1, marginBottom: 0 }}>
              <span className="item-text">{item}</span>
            </li>

            <button className="Delete-Btn">Delete</button>

          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoItems;
