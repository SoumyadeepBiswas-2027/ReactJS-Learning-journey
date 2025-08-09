import Display from './Components/Display';
import Items from './Components/Items';
import './App.css'
import { useState } from 'react';

function App() {

  return (
    <>
    <div className=' Container'>
      <Display/> 
      <button className='btn' onClick={(event) =>{
        console.log(event);
      }}>Enter</button>
    </div>
      <Items/>
    </>
   );
}
export default App;