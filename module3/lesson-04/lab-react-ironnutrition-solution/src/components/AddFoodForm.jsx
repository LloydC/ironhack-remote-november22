import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
    const {foods, setFoods, setFoodsFilter} = props;

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        const newFood = {name, image, calories, servings }
        const updateFoodsList = [...foods, newFood];
        setFoods(updateFoodsList)
        setFoodsFilter(updateFoodsList)
        //update the state variable with foods
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" value={name} onChange={(event) => {setName(event.target.value)}} />

      <label>Image</label>
      <Input type="text" value={image} onChange={(event) => {setImage(event.target.value)}} />

      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input type="text" value={calories} onChange={(event) => {setCalories(event.target.value)}} />

      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input type="text" value={servings} onChange={(event) => {setServings(event.target.value)}} />

      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
