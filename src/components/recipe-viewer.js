import React, {useState, useEffect } from 'react'; // We are using React Hooks here because class components are cringe
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios'; // This is the HTTP library used to make calls to the backend
const url = process.env.REACT_APP_SERVER_URL + "recipes"; // makes the url look like http://localhost:3000/recipes or something


function RecipeViewer(props) {
    /* The RecipeViewer component makes an AJAX call to the 
    backend upon load and displays all the recipes found. */
    
    const [recipes, setRecipes] = useState([]); // This is the recipes hook. Call it with "recipes", update it with a new state using "setRecipes"

    const getRecipes = () => {
        /* This function makes an AJAX call to the server specified in REACT_APP_SERVER_URL
        and updates the "recipes" state to an array containing each recipe object. */
        axios.get(url)
        .then(res => {
            setRecipes(res.data);
            console.log(res.data)
            console.log(`Successfully pulled ${res.data.length} recipes`)
        })
        .catch (err => console.log(err))
    }

    useEffect(() => {   
        // This is run when the page loads, and calls the getRecipes function
        getRecipes();
    }, []);

    function RecipeCard(props) {
        /* Sub-component to display cards. This takes in a recipe object with
        properties like name, ingredients etc and returns a nicely formatted
        JSX object to display on the page. */

        let r = props.rdata;
        /*
                <h1>{r.name}</h1>
                <p>By {r.author}</p>
                <p>id: {r._id}</p>
                <br/>{r.image_url ? <img src={r.image_url}/> : ""}<br/>
                <b>Description: </b> {r.description}<br/>
                <b>Tags: </b> {r.tags}<br/>
                <b>Ingredients: </b><br/> {r.ingredients}<br/>
                <b>Instruction:</b> <br/>
                {r.ingredients}<br/> */
        
        return (
            <div className = "card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="flush" src={r.image_url} />
                <Card.Body>
                    <Card.Title>{r.name}</Card.Title>
                    <Card.Text>
                        {r.description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        )
    }
    
    return (
        // Gets the recipes object array and returns a RecipeCard of each recipe.
        <div className="recipe_viewer">
            {recipes ? Object.keys(recipes).map(r => <RecipeCard key={recipes[r]._id} rdata={recipes[r]}/>): <p>empty</p>}
        </div>
    )
}

export default RecipeViewer;