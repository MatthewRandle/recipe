import React, { useState } from "react";

const Direction = ({ direction, step }) => {
    const [completed, setCompleted] = useState(false);

    return(
        <div className="recipe_direction">
            <h3>{step}</h3>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>{direction}</p>
            <button onClick={() => setCompleted(!completed)}>{completed ? "Completed" : "Uncompleted"}</button>
        </div>
    );
};

export default Direction;