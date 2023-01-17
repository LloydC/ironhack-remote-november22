import { useState } from 'react';
// import Counter from './components/Counter';
import RecipesList from './components/RecipeList';
import './App.css';

function App() {
  // Declare a new state variable named "theme"
  const [theme, setTheme] = useState('light');

  const toggleTheme = event => {
    setTheme(event.target.value);
  };
 
  return (
    <div className={'App ' + theme}>
      <h1>React - state and events</h1>
      {/* <Counter /> */}

      {/* <select onChange={ event => setTheme(event.target.value) }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select> */}

    <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
    </select>
      <RecipesList />
    </div>
  );
}

export default App;
