import React from 'react';

import RecipeViewer from '../components/recipe-viewer'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Form, FormControl } from 'react-bootstrap';
const Header = () => (  
<Jumbotron>
<h1 className="header">Kupika</h1>
<div className="nav">
  <Breadcrumb>
    <Breadcrumb.Item active>Recipes</Breadcrumb.Item>
    <Breadcrumb.Item href="/add">Create a Recipe</Breadcrumb.Item>
  </Breadcrumb>
</div>
<div className="search">
  <Form inline>
    <FormControl type="text" placeholder="Search" />
    <Button type="submit">Submit</Button>
  </Form>
</div>
</Jumbotron>

);

export default Header;