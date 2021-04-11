import React, { useState, useEffect } from 'react'; // We are using React Hooks here because class components are cringe
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { CardColumns } from 'react-bootstrap';
import axios from 'axios'; // This is the HTTP library used to make calls to the backend
var url = process.env.REACT_APP_SERVER_URL + "recipes"; // makes the url look like http://localhost:3000/recipes or something


function RecipeViewer(props) {
    /* The RecipeViewer component makes an AJAX call to the 
    backend upon load and displays all the recipes found. */

    const [recipes, setRecipes] = useState([]); // This is the recipes hook. Call it with "recipes", update it with a new state using "setRecipes"

    const getRecipes = () => {
        /* This function makes an AJAX call to the server specified in REACT_APP_SERVER_URL
        and updates the "recipes" state to an array containing each recipe object. */

        if (props.searchTerm != null) {
            url = url + "?name=" + props.searchTerm
        }
        axios.get(url)
            .then(res => {
                setRecipes(res.data);
                console.log(res.data)
                console.log(`Successfully pulled ${res.data.length} recipes`)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        // This is run when the page loads, and calls the getRecipes function
        getRecipes();
    }, []);

    function RecipeCard(props) {
        /* Sub-component to display cards. This takes in a recipe object with
        properties like name, ingredients etc and returns a nicely formatted
        JSX object to display on the page. */


        const history = useHistory();
        let r = props.rdata;

        function on_click_submit(e) {
            e.preventDefault();

            history.push("/" + r._id);

        }
        /*
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="flush" src={r.image_url} />
                    <Card.Body>
                        <Card.Title>{r.name}</Card.Title>
                        <Card.Text>
                            {r.description}
                        </Card.Text>
                        <Button onClick= {on_click_submit} >Go to Recipe</Button>
                    </Card.Body>
                </Card>
                */
        return (
            
                
                    <Card className= "cardBox">
                        <Card.Body>
                                <Card.Img className = "cardImg" bsPrefix="cardImg" rounded src={r.image_url} fluid  />
                                <Card.Title>{r.name}</Card.Title>
                                <Card.Text>{r.description}</Card.Text>
                                <Button onClick= {on_click_submit} >Go to Recipe</Button>
                            </Card.Body>
                    </Card>

                

            
        )
    }

    return (
        // Gets the recipes object array and returns a RecipeCard of each recipe.
        <div className="recipe_viewer">
            {recipes ? Object.keys(recipes).map(r => <RecipeCard key={recipes[r]._id} rdata={recipes[r]} />) : <p>empty</p>}
        </div>
    )
}

export default RecipeViewer;