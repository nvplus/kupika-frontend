import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/home';
import AddRecipe from './pages/add-recipe'


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/add" exact component={AddRecipe} />
    </Router>
  );
}

export default App;
