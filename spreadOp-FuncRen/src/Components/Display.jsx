import { useState } from "react";
import styles from "./Display.module.css";

const [currItem,setCurrItem] = useState("");
function Display() {
  return (
    <div className={styles.DispContainer}>
      <input type="text" placeholder="Type here..." className={styles.DispScreen} />
    </div>

    
  );
}

export default Display;   