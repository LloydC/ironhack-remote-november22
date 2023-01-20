import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then(response => setCountries(response.data))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage countries={countries} />} />
        <Route path='/:id' element={<Homepage countries={countries} />} />
      </Routes>

    </div>
  );
}

export default App;
