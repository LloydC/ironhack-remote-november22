import { useState, useEffect } from "react";
 
function Counter() {
  const [count, setCount] = useState(0); // step 1 --> initialize state variables
 
  useEffect(()=>{
    console.log('count', count)
  }, [count])

  return (
    // step 2 --> render what is inside the return statement
    <div className="Counter">
      <h2>Counter</h2>
 
      <p>You clicked {count} times</p>
 
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button> 
 
    </div>
  );
}
 
export default Counter;