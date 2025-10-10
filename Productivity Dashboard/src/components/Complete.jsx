import { AiOutlineCheck } from "react-icons/ai";
export function Complete() {
  return (
    <>
      <button className="Complete-Btn" onClick={() => {console.log("Completed");}}>
        <AiOutlineCheck />
      </button>
    </>
  );
}
