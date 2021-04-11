import React from 'react';
import Header from '../components/header';
import Container from 'react-bootstrap/Container';

function About() {
    return (
        <Container className="p-3">
          <Header/>
          <h1>About Kupika</h1>

          <h2>Mission</h2>

          <p>We decided to create a recipe website, where professional chefs can 
              share their own recipe and allow other chefs to view, edit, and share
               the recipes with each other. The idea is to allow old and proven 
               recipes to be refined further, and create newer recipes that fuse
            different pallets from different cultures.</p>

            <h2>Our Team</h2>
            <p>We're a group of Laurier students with a passion for both food and software development, who
                wanted to work on a project that would mix both of our interests.</p>
            <img src="https://cdn.discordapp.com/attachments/496323969612513283/830623575240736809/unknown.png"/><br/><br/>
            <h2>Get in touch</h2>
            <ul>
                <li>Adam Katt - abdu8270@mylaurier.ca</li>
                <li>Eric Tran - tran9350@mylaurier.ca</li>
                <li>Vincent Nguyen - nguy2112@mylaurier.ca</li>
            </ul>
        </Container>
    );
}


  
export default About;  