import Display from './Components/Display';
import Items from './Components/Items';
import './App.css'
import { useState } from 'react';

function App() {

  const[CurrAdd,setAdd] = useState("");
  const[items,setItems] = useState([])

  const handleOnClick= ()=>{
      setItems([...items, CurrAdd]); // add
      setAdd(""); // clear input
  };
  
  return (
    <>
    <div className=' Container'>
      <Display CurrAdd={CurrAdd} setAdd={setAdd}/> 
      <button className='btn' onClick={handleOnClick}>Enter</button>
    </div>
      <Items items={items} />
    </>
        
   );
}
export default App;