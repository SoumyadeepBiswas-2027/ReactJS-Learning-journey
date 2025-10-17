import React from 'react'

export const ChildComponent = React.memo((props) => {
  console.log("Child component got re-rendered.")
  return (
    <button onClick={props.handleClick}>{props.buttonName}</button>
  )
})

//if we wrap our component in react.memo then components will be re-rendered only when the props ofcomponent change

//But if we send a function ,then react.memo wont be able to save u from re-rendering