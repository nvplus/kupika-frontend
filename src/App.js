import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import AddRecipe from './pages/add-recipe'
import Search from "./pages/search"
import RecipePage from'./pages/recipes'
import About from'./pages/about'
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/add" component={AddRecipe} />
      <Route path="/search/:searchTerm" exact component={Search} />
      <Route path="/recipe/:id" exact component={RecipePage} /> 
    </Router>
  );
}

export default App;
