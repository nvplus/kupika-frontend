import React, { useState, useEffect } from 'react'; // We are using React Hooks here because class components are cringe
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import axios from 'axios'; // This is the HTTP library used to make calls to the backend
const url = process.env.REACT_APP_SERVER_URL + "recipes"; // makes the url look like http://localhost:3000/recipes or something


function RecipePage(props) {
    /* The RecipeViewer component makes an AJAX call to the 
    backend upon load and displays all the recipes found. */

    const [recipes, setRecipes] = useState([]); // This is the recipes hook. Call it with "recipes", update it with a new state using "setRecipes"

    const getRecipes = () => {
        /* This function makes an AJAX call to the server specified in REACT_APP_SERVER_URL
        and updates the "recipes" state to an array containing each recipe object. */
        axios.get(url)
            .then(res => {
                setRecipes(res.data);
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

        let r = props.rdata;

        return (
            <Jumbotron >
                <Container className="p-3">
                    <Card.Header>{r.name} <Badge variant="primary" className="text-center">creamy,eggy{r.tags}</Badge>  <Button variant="danger">Delete</Button></Card.Header>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Img fluid src ={r.image_url}/>
                            <Card.Title>{r.description}</Card.Title>
                            <Card.Text>
                                {r.ingredients}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">{r.date}</Card.Footer>
                    </Card>
                </Container>
            </Jumbotron>
        )
    }



    return (
        // Gets the recipes object array and returns a RecipeCard of each recipe.
        <div className="recipe_viewer">
            {recipes ? Object.keys(recipes).map(r => <RecipeCard key={recipes[r]._id} rdata={recipes[r]} />) : <p>empty</p>}
        </div>
    )
}

export default RecipePage;