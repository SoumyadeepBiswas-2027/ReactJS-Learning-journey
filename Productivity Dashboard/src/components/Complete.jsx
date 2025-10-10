import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

export function Complete() {
  const[completed, setCompleted] =useState(false);

  const handleOnComplete=()=>{
    setCompleted(true);
  }

  return (
    <>
    <button className="Complete-Btn" onClick={handleOnComplete} style={{backgroundColor: completed ? "green" : " "}}>
        {completed ? "Completed!" : <AiOutlineCheck />}
      </button>
    </>
  );
}
