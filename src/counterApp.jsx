import React, { useState } from 'react'

function CounterApp() {
  const [count, setCount] = useState (0);

  function incre(){
     setCount (count + 1);
  }
  function decre(){
    setCount (count - 1);
  }
  return (
    <div>
      <button onClick={incre}>Increment</button>
      <p>Count : {count}</p>
      <button onClick={decre}>Decrement</button>
    </div>
  )
}

export default CounterApp
