import { useState } from 'react';
 
function Counter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("");

    const addToCount = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const deduceFromCount = () => {
        setCount((prevCount) => prevCount - 1)
    }

  return (
    <div className="Counter">
      <h2>Counter</h2>
 
      <p> {name} set the count to {count} </p>
 
      {/* <button onClick={()=> setCount((prevCount) => prevCount - 1)}> - </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button> */}
      
      <button onClick={deduceFromCount}>-</button>
      <button onClick={addToCount}> + </button>

      <input type={'text'} onChange={(event) => {setName(event.target.value)}}/>
    </div>
  );
}
 
export default Counter;