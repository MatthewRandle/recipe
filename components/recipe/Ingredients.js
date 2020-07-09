import React from "react";

import Ingredient from "./Ingredient";

const Ingredients = ({ recipe, servings, showIngredients }) => {
    if (recipe.ingredients && recipe.ingredients.length && Array.isArray(recipe.ingredients)) {
        return (
            <div style={{ display: showIngredients ? "block" : "none" }}>
                {recipe.ingredients.map((ingredient, i) => (
                    <Ingredient key={i} ingredient={ingredient} servings={servings} />
                ))}
            </div>
        )
    }

    return null;
}

export default Ingredients;