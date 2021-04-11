import React from 'react';
import {useHistory} from 'react-router-dom';
import RecipeViewer from '../components/recipe-viewer'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Form, FormControl } from 'react-bootstrap';


function Header() {
  const history = useHistory()

  function on_click_submit (e) {
    e.preventDefault();

    
    let searchTerm = e.target.elements[0].value;

    if (searchTerm) {
      history.push("/search/" +searchTerm );
      window.location.reload();
    }

  }
  
  return (  
    <Jumbotron>
      <h1 className="header">Kupika</h1>
      <div className="nav">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/about">About</Breadcrumb.Item>
          <Breadcrumb.Item href="/add">Create a Recipe</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="search">
        <Form inline onSubmit={on_click_submit}>
          <FormControl type="text" placeholder="Search" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </Jumbotron>
  );
}

export default Header;