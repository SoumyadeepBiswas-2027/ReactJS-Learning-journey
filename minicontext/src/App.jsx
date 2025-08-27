import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//created context below--> 1st step
const WorkContext = createContext();

function App() {
  

  return (
    <>
     <ChildA/>
    </>
  )
}

export default App;
