import React from 'react';
import { Link } from 'react-router-dom';

import RecipeViewer from '../components/recipe-viewer'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Form, FormControl } from 'react-bootstrap';


const Home = () => (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Kupika</h1>
        <div className="nav">
          <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Recipes</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/add">Create a Recipe</Link></Breadcrumb.Item>
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
  

export default Home;