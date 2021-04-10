import React from 'react';
import {Link} from 'react-router-dom';

function AddRecipe() { 
    return (
        <div className="add-recipe">
            <h1>Add a Recipe</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default AddRecipe;