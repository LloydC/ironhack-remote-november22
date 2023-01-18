// import Counter from './components/Counter';
// import Timer from './components/Timer';
import TimerTwo from "./components/TimerTwo";
// import IronbnbList from "./components/IronBnbList";
import { useState } from "react";
import './App.css';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {/* {show && <Counter />} */}
      {/* {show && <Timer />} */}
      {show && <TimerTwo />}
      {/* <IronbnbList /> */}
    </div>
  );
}

export default App;
