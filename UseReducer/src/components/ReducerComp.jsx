import { useReducer } from "react"

const ReducerComp = () =>{


  const initialState ={
    count: 0,
    inrement:2,
    decrement:2,
    //we have single initial state but multiple properties

  };


  const reducer = (state, action) =>{
    console.log(state,action);
    // if(action.type === "INCREMENT"){
    //   return state + 1;
    // }
    // if(action.type === "DECREMENT"){
    //   return state - 1;
    // }
    // if(action.type === "RESET"){
    //   return state=0;
    // }
    switch(action.type){
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1};

        case "DECREMENT":
         return {...state, count: state.count - 1};

        case "RESET":
         return {...state, count: 0};

        default: 
        return state;
    }
  }
  // const[count, dispatch] =useReducer(reducer, 0);
  const[state, dispatch] =useReducer(reducer, initialState);
  
  
  return (
    <div className="mainpg">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
      <button onClick={() => dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default ReducerComp