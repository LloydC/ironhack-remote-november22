import {useState} from 'react'
import foodsData from './foods.json';
import './App.css';
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [foodsFilter, setFoodsFilter] = useState(foodsData);

  return (
    <div className="App">
      <Search setFoods={setFoods} foodsFilter={foodsFilter}/>
      <FoodList foods={foods} />
      <AddFoodForm foods={foods} setFoods={setFoods} setFoodsFilter={setFoodsFilter}/> 
    </div>
  );
}

export default App;
