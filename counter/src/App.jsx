import { useState } from 'react'

import './App.css'

function App() {
 let [counter , setCounter] = useState(0)
 
 let addValue = () => {
  if(counter === 20){
    return 20;
    
  }else{
    setCounter(counter + 1);
  }
 }

 let removeValue = () => {
  if(counter === 0){
    return 0;
  }else{
    setCounter(counter - 1);
  }
 }
  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Learning Phase: {counter} </h2>

     <button onClick={addValue}>Increased+</button>
     <button onClick={removeValue}>Decreased-</button>
    </>
  )
}

export default App
