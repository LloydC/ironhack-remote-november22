import "./App.css";
// import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
// import Counter from "./components/Counter";
import IronbnbList from "./components/IronbnbList";
import ApartmentDetails from "./components/ApartmentDetails";
 
function App() {
  // const [show, setShow] = useState(false);
 
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <IronbnbList />} />
        <Route path="/:apartmentId" element={<ApartmentDetails />}/>
      </Routes>
      {/* <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <Counter />} */}
     
    </div>
  );
}
 
export default App;