import React, { useState } from "react";
import axios from "axios";
import Fraction from "fraction.js";
import Head from "next/head";

import getRouteString from "../utils/getRouteString";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Recipe = ({ recipe }) => {
    const [servings, setServings] = useState(recipe ? recipe.servings : 4);

    if(recipe) {
        return(
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Head><title>{recipe.title} - reciperandle</title></Head>

                <Navbar />

                <div className="recipe">
                    <div className="recipe_hero">
                        <div>
                            <h1>{recipe.title}</h1>
                            
                            <div className="recipe_hero_servings">
                                <label>Serving:</label>
                                <input type="number" value={servings} onChange={e => setServings(e.target.value)} min="1" />
                            </div>
                        </div>

                        <img src={`/recipes/${recipe.id}.jpg`} alt={recipe.title} />
                    </div>

                    <div className="recipe_ingredients">
                        <h2>Ingredients ({servings}) servings</h2>

                        {recipe.ingredients && recipe.ingredients.length && Array.isArray(recipe.ingredients) ?
                            recipe.ingredients.map((ingredient, i) => (
                                <div className="recipe_ingredient" key={i}>
                                    <h3>{new Fraction(ingredient.quantity * servings).toFraction(true)}</h3>
                                    <p>{ingredient.name}</p>
                                </div>
                            ))
                        : null}
                    </div>

                    <div className="recipe_directions">
                        <h2>Directions</h2>

                        {recipe.directions && recipe.directions.length && Array.isArray(recipe.directions) ?
                            recipe.directions.map((direction, i) => (
                                <div className="recipe_direction" key={i}>
                                    <h3>{i + 1}</h3>
                                    <p>{direction}</p>
                                </div>
                            ))
                            : null}
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
    else return(
        <div>
            Not found
        </div>
    )
};

Recipe.getInitialProps = async function ({ store, req, res, query }) {
    const { recipeID } = query;
    
    try {
        const response = await axios.post(getRouteString("/recipe/get-recipe", req), { recipeID });

        return { recipe: response.data };
    }
    catch(err) {
        return { recipe: null }; //would actually return readable error here, or redirect to another page
    }
};

export default Recipe;