import React, { useState, useEffect } from 'react'; // We are using React Hooks here because class components are cringe
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Header from '../components/header';
import axios from 'axios'; // This is the HTTP library used to make calls to the backend
import {useHistory, useParams} from 'react-router-dom';
var url = process.env.REACT_APP_SERVER_URL + "recipes"; // makes the url look like http://localhost:3000/recipes or something


function RecipePage(props) {
    /* The RecipeViewer component makes an AJAX call to the 
    backend upon load and displays all the recipes found. */

    const [recipes, setRecipes] = useState(); // This is the recipes hook. Call it with "recipes", update it with a new state using "setRecipes"
    const {id} = useParams();

    const getRecipes = () => {
        axios.get(url+'/'+id)
            .then(res => {
                setRecipes(res.data);
            })

            .catch(err => console.log(err))
    }

    useEffect(() => {
        // This is run when the page loads, and calls the getRecipes function
        getRecipes();
    }, []);

    function RecipeCard(props) {
        let r = props.rdata;
        const history = useHistory();

        function on_click_delete(e) {
            e.preventDefault();
            var del_url = url + '/' +r._id +"/delete";
            alert("Deleted " + r.name + " (" +r._id +")")
            axios.get(del_url); // delete function
            
            history.push("/")
            window.location.reload();
        }

        return (
            <Jumbotron>
                    <Container className="p-3">
                        <Card.Header>{r.name} <Badge variant="primary" className="text-center">{r.tags.toString()}</Badge>  <Button onClick ={on_click_delete} variant="danger">Delete</Button></Card.Header>
                        <Card className="text-center recipePage">
                            <Card.Body>
                                <Card.Img fluid src={r.image_url} />
                                <Card.Title>{r.description}</Card.Title>
                                <Card.Text>
                                    Ingredients: {r.ingredients.toString()}
                                </Card.Text>
                                <Card.Text>{r.instructions}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">{r.date}</Card.Footer>
                        </Card>
                    </Container>
            </Jumbotron>
        )
    }


// {recipes ? Object.keys(recipes).map(r => <RecipeCard key={recipes[r]._id} rdata={recipes[r]} />) : <p>empty</p>}
    return (
        // Gets the recipes object array and returns a RecipeCard of each recipe.
        <Container className="p-3">
            <Header />
            {recipes ? <RecipeCard rdata={recipes}/> : "e"}
        </Container>
    )
}

export default RecipePage;