import React from 'react';

import RecipeViewer from '../components/recipe-viewer'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Form, FormControl } from 'react-bootstrap';


const Home = () => (
    <Container className="p-3">

      <RecipeViewer></RecipeViewer>
    </Container>
  );
  

export default Home;