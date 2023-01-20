import {useState} from 'react'
import foodsData from './foods.json';
import './App.css';
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [foodsFilter, setFoodsFilter] = useState(foodsData); // never going to be filtered

  return (
    <div className="App">
      <Search setFoods={setFoods} foodsFilter={foodsFilter}/>
      <FoodList foods={foods} />
      <AddFoodForm foodsFilter={foodsFilter} setFoods={setFoods} setFoodsFilter={setFoodsFilter}/> 
    </div>
  );
}

export default App;
