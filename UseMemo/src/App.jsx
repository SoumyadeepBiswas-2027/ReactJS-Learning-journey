import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const[input,setInput]=useState("");

  function expensiveTask(num){
    console.log("inside expensive task");
    for(let i=0;i<=1000000000;i++){}
    return num*2;
  }

  let doubleVal=useMemo(()=> expensiveTask(input), [input]);

  return (
   <div>
    <button onClick={()=>{setCount(count+1)}}>
      Increment
    </button>

    <div>
      Count: {count}
    </div>

    <input 
    type="number" 
    placeholder='Enter Number..' 
    value={input}
    onChange={(e)=>{setInput(e.target.value)}} />

    <div>
      Double: {doubleVal}
    </div>
   </div>
  )
}

export default App
