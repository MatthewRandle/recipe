import React from "react";

import Direction from "./Direction";

const Directions = ({ recipe, showIngredients }) => {
    if (recipe.directions && recipe.directions.length && Array.isArray(recipe.directions)) {
        return(
            <div style={{ display: showIngredients ? "none" : "block" }}>
                {recipe.directions.map((direction, i) => (
                    <Direction direction={direction} step={i + 1} />
                ))}
            </div>
        ); 
    }

    return null;
}

export default Directions;