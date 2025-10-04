function TodoItems({ value }) {
  return (
    <div className="listContainer">
      <ul className="list-group">
        {value.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoItems;