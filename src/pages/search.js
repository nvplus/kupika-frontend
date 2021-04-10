import React from 'react';
import {useParams} from 'react-router-dom'
import RecipeViewer from '../components/recipe-viewer'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Form, FormControl } from 'react-bootstrap';
import Header from '../components/header';


function Search() {
    let {searchTerm} = useParams()

    return (
        <Container className="p-3">
          <Header/>
          <h1>Search results for {searchTerm}</h1>
          <RecipeViewer searchTerm={searchTerm}/>
        </Container>
    );
}


  
export default Search;  