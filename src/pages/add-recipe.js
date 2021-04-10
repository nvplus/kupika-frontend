import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Header from '../components/header';

import { FormControl, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const url = process.env.REACT_APP_SERVER_URL + "recipes";

function AddRecipe() { 
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    function got_recipe(e) {
        e.preventDefault()
        let form = e.target.elements

        setIsSubmitClicked(true);
        
        let recipe = {
            "name": form[0].value.trim(),
            "author": form[1].value.trim(),
            "date": Date.now(),
            "description": form[2].value.trim(),
            "ingredients": form[3].value.trim().split(","),
            "instructions": form[4].value.trim(),
            "image_url": form[5].value.trim(),
            "tags_list": form[6].value.trim().split(",")
        }
        
        const json = JSON.stringify(recipe)
        console.log(recipe)
        const res = axios.post(url, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data._id);
        })
        .catch (err => {

                alert("An error ocurred while trying to add the recipe. Make sure to name, author, ingredients list, and instructions are filled in.");
                setIsSubmitClicked(false);
            }   
        )
    }

    return (
        <div className="add-recipe p-3 container">
            <Header/>
            <h1>Create a Recipe</h1>
            
            <Form onSubmit={got_recipe}>
                <Form.Group>
                    <Form.Label>Name*</Form.Label>
                    <Form.Control type="input" disabled={isSubmitClicked}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Author*</Form.Label>
                    <Form.Control type="input" disabled={isSubmitClicked}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="input" disabled={isSubmitClicked}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Ingredients List* (Separated by commas)</Form.Label>
                    <Form.Control type="input" disabled={isSubmitClicked}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Instructions*</Form.Label>
                    <Form.Control type="input" disabled={isSubmitClicked}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="input" disabled={isSubmitClicked}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tags List* (Separated by commas)</Form.Label>
                    <Form.Control type="input" disabled={isSubmitClicked}/>
                </Form.Group>

                <Button type="submit" disabled={isSubmitClicked}>Submit</Button>
            </Form>
        </div>
    )
}

export default AddRecipe;