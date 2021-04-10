import React from 'react';

import RecipeViewer from '../components/recipe-viewer'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Form, FormControl } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';

import Header from '../components/header';
import RecipePage from "../pages/recipes";


const Home = () => (
    <Container className="p-3">
      <Header/>
      <RecipePage/>
    </Container>
  );
  
export default Home;  