import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleCreate = (newRecipe) => setRecipes([...recipes, newRecipe ])
  const handleDelete = (indexToDelete) => setRecipes(recipes.filter((_elem, index)=> index !== indexToDelete))
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      <RecipeCreate setRecipes={setRecipes} handleCreate={handleCreate}/>
    </div>
  );
}

export default App;
