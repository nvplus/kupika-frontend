import React from 'react';
import RecipeViewer from '../components/recipe-viewer';
import { Link } from 'react-router-dom';

function Home() { 
    return (
        <div className="home">
            <Link to="/add">Add a recipe</Link>
            <RecipeViewer />
        </div>
    )
}

export default Home;