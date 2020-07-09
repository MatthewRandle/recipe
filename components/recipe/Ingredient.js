import React, { useState } from "react";
import Fraction from "fraction.js";

const Ingredient = ({ ingredient, servings }) => {
    const [markedOff, setMarkedOff] = useState(false);

    return(
        <div className="recipe_ingredient">
            <h3>{new Fraction(ingredient.quantity * servings).toFraction(true)}</h3>
            <p style={{ textDecoration: markedOff ? "line-through" : "none" }}>{ingredient.name}</p>
            <button onClick={() => setMarkedOff(!markedOff)}>{markedOff ? "Un-mark" : "Mark off"}</button>
        </div>
    );
};

export default Ingredient;