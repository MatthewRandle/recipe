import React from "react";
import Link from "next/link";

const Preview = ({ recipe }) => {    
    return(
        <Link href={`/recipe/${recipe.id}`}>
            <a style={{ background: `linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5) ), url("/recipes/${recipe.id}.jpg")` }} className="recipe_preview">
                <p>{recipe.title}</p>
            </a>
        </Link>
    );
};

export default Preview;