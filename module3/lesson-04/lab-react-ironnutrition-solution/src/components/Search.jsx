import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const { foodsFilter, setFoods} = props;
    
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (str) => {
         
        // if searchTerm is empty display the original list of food
        if(str === ""){
            setFoods(foodsFilter)
        }
        else {
            const newList = foodsFilter.filter((food) => food.name.toLowerCase().includes(searchTerm))
            console.log(newList)
            setFoods(newList)
        }
        // else display the filtered list
        
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchTerm} type="text" onChange={(event) => {setSearchTerm(event.target.value); handleSearch(event.target.value)}} />
    </>
  );
}

export default Search;