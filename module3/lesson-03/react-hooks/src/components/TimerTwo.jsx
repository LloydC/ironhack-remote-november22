import { useState, useEffect } from "react";
 
function TimerTwo() {
  const [count, setCount] = useState(0); // step 1 --> initialize state variable

  useEffect(()=>{ // step 3 ==> execute what's inside my useEffect callback
    // fetch data from an API
    // setInterval(()=>{
    //     setCount(count + 1)
    // }, 1000)
    const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
    }, 1000);
   
      // Return a "cleanup function" which will run automatically
      // before the component is removed from the DOM
      return () => {                                               // <== ADD
        console.log("Cleanup - Component Unmounting");
        clearInterval(id);
      };
  }, [])
 
 
  return ( // step 2 --> render what's inside the return
    <div className="Timer">
      <h2>Timer Two</h2>
 
      <h3>{count}</h3>
    </div>
  );
}
 
export default TimerTwo;