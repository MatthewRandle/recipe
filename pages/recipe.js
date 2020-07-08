import React from "react";

const Recipe = ({ text }) => {

    return <p>{text}</p>
};

Recipe.getInitialProps = async function ({ store, req, res }) {
    

    return { ignore: null };
};

export default Recipe;