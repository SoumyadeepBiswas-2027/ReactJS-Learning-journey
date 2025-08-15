import styles from "./Display.module.css";

function Display({setAdd,CurrAdd}) {

const handleNameChange = (event) =>{
  setAdd(event.target.value);
}
  
  return (
    <div className={styles.DispContainer}>
      <input type="text" placeholder="Type here..." className={styles.DispScreen} onChange={handleNameChange} value={CurrAdd}/>
    </div>    
  );
}

export default Display;   