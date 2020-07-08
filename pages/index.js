import React, { useState } from "react";
import axios from "axios";
import getRouteString from "../utils/getRouteString";

import Footer from "../components/Footer";
import Preview from "../components/recipe/Preview";
import Navbar from "../components/Navbar";

const tags = [
    "dessert",
    "fruit",
    "appetizer",
    "snack",
    "dip",
    "spread",
    "vegetarian",
    "main dish",
    "breakfast",
    "grill",
    "indian"
];

const Index = ({ recipes }) => {
    const [chosenTags, setChosenTags] = useState([]);

    const updateTags = (clickedTag) => {
        if (chosenTags.includes(clickedTag)) setChosenTags(chosenTags.filter(tag => tag !== clickedTag)); //already in array, so filter out
        else setChosenTags([...chosenTags, clickedTag]); //add new tag to array
    };

    const getFilteredRecipes = () => {
        //find all the recipes that have tags in common with chosenTags
        let filtered = recipes.filter(recipe => {
            return chosenTags.some(value => recipe.tags.includes(value));
        });

        //return Preview's for each recipe
        let filteredRecipes = filtered.map(recipe => (
            <Preview key={recipe.id} recipe={recipe} />
        ));

        return filteredRecipes;
    };

    return(
        <div className="home">
            <Navbar />

            <section className="hero">
                <h1>Amazing recipes curated by professionals around the globe</h1>

                <div className="hero_images">
                    <div className="hero_image_container"><img src="/hero-1.jpg" alt="Fries" /></div>
                    <div className="hero_image_container"><img src="/hero-2.jpg" alt="Burger" /></div>
                    <div className="hero_image_container"><img src="/hero-3.jpg" alt="Pizza" /></div>
                </div>
            </section>

            <section className="home_recipes_container">
                <div className="home_recipes_filter">
                    <h2>Recent Recipes</h2>
                    <ul>
                        {tags.map((tag, i) => (
                            <li 
                                className={chosenTags.includes(tag) ? "filterTag--active" : "filterTag"} 
                                key={i} 
                                onClick={() => updateTags(tag)}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="home_recipes">
                    {recipes && recipes.length > 0 ?
                        chosenTags.length > 0 ?
                            getFilteredRecipes()
                        :
                            recipes.map((recipe, i) => {
                                return <Preview key={i} recipe={recipe} />;
                            })
                    : null}
                </div>
            </section>

            <Footer />
        </div>
    );
};

Index.getInitialProps = async function ({ store, req, res }) {
    try {
        const response = await axios.get(getRouteString("/recipe/get-all", req));

        return { recipes: response.data };
    }
    catch(err) {
        console.log(err);
        return { recipes: [] };
    }
};

export default Index;