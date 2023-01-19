import FoodBox from "./FoodBox";

function FoodList(props){
    const { foods } = props;

    return (
        <>
        <h1>Food List</h1>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                foods.map(food => <FoodBox food={food} />)
            }
        </div>
        
        </>
    )
}

export default FoodList;