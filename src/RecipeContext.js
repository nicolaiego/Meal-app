import { createContext, useState } from "react";

const RecipeContext = createContext()

export function RecipeProvider ({ children }) {

    const [recipeInfo, setRecipeInfo] = useState("");

    const [recipeInfoAPI, setRecipeInfoAPI] = useState("");


    const getRecipeInfo = () => {
        setRecipeInfoAPI(`http://localhost:3300//user/${recipeInfo}`);
         }

    return (
        <RecipeContext.Provider value={{ recipeInfo, recipeInfoAPI, getRecipeInfo }}>
            { children }</RecipeContext.Provider>
    );
}


export default RecipeContext;