import styles from "./Items.module.css";
function Items({items}) {
      
 return (
<>
<div className={styles.Items}>
  <ul className="list-group">
    {items.map((item) =>(
    <li  className="list-group-item">{item}</li> //key={item}
    ))}
  </ul>
</div>
</>
        
   );
}

export default Items;   