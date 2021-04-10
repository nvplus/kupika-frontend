import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import AddRecipe from './pages/add-recipe'
import Search from "./pages/search"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/add" exact component={AddRecipe} />
      <Route path="/search/:searchTerm" component={Search} />
    </Router>
  );
}

export default App;
