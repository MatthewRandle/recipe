import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";

import getRouteString from "../utils/getRouteString";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ingredients from "../components/recipe/Ingredients";
import Directions from "../components/recipe/Directions";

const Recipe = ({ recipe }) => {
    const [servings, setServings] = useState(recipe ? recipe.servings : 4);
    const [showIngredients, setShowIngredients] = useState(true);

    if(recipe) {
        return(
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Head><title>{recipe.title} - reciperandle</title></Head>

                <Navbar />

                <div className="recipe">
                    <div className="recipe_hero">
                        <div className="recipe_hero_content">
                            <h1>{recipe.title}</h1>
                            <p>By {recipe.author.name}</p>
                            <p>{recipe.description}</p>
                            
                            <div className="recipe_hero_info">
                                <div className="recipe_hero_info_row">
                                    <label>Serving</label>
                                    <input type="number" value={servings} onChange={e => setServings(e.target.value)} min="1" />
                                </div>

                                {recipe.prep_time_min ?
                                    <div className="recipe_hero_info_row">
                                        <h3>Prep Time</h3>
                                        <p>{recipe.prep_time_min} mins</p>
                                    </div>
                                : null}

                                {recipe.cook_time_min ? 
                                    <div className="recipe_hero_info_row">
                                        <h3>Cook Time</h3>
                                        <p>{recipe.cook_time_min} mins</p>
                                    </div>
                                : null}
                            </div>
                        </div>

                        <div className="recipe_hero_image" style={{ background: `url("/recipes/${recipe.id}.jpg")` }}></div>
                    </div>

                    <div className="recipe_content_container">
                        <div className="recipe_content_topBar">
                            <button onClick={() => setShowIngredients(true)} className={showIngredients ? "recipe_content_topBar--chosen" : ""}>Ingredients</button>
                            <button onClick={() => setShowIngredients(false)} className={!showIngredients ? "recipe_content_topBar--chosen" : ""}>Directions</button>
                        </div>

                        <div className="recipe_content">
                            <Ingredients showIngredients={showIngredients} recipe={recipe} servings={servings} />
                            <Directions showIngredients={showIngredients} recipe={recipe} />
                        </div>
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