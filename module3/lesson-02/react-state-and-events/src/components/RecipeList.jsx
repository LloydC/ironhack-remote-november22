import recipeList from '../recipes.json'
import { useState } from 'react';

function RecipeList(){

    const [recipes, setRecipes] = useState(recipeList);

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = Math.random();
        const newRecipe = { _id: `${newId}`, name };
        // const updateRecipes = [...recipes, newRecipe];
        const updateRecipes = [...recipes]
        updateRecipes.push(newRecipe)
        setRecipes(updateRecipes)
        setName("")
    }
    return (
        <div>
            <h1>Recipes Application</h1>
            {recipes.map(recipe => {
                return <div key={recipe._id}>
                            <h3>{recipe.name}</h3>
                            {/* <img src={recipe.image} alt={'recipe_image'} width={'100px'} height={'100px'} />  */}
                        </div>
            })}

            <form onSubmit={handleSubmit}>
                <input type={'text'} name={'name'} value={name} onChange={(event)=> setName(event.target.value)}/>
                <button type='submit'>Add New Recipe</button>
            </form>
        </div>
    )
}

export default RecipeList;