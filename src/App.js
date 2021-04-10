import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './App.css';
import RecipeViewer from './components/recipe-viewer';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Kupika</h1>
      <div className="nav">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Recipes</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Create a Recipe</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="search">
        <Form inline>
          <FormControl type="text" placeholder="Search" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </Jumbotron>
    <RecipeViewer></RecipeViewer>
  </Container>
);


export default App;
