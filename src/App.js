import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
