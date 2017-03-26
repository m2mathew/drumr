// External Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Internal Dependencies
import Home from './root';


const Add = () => (
  <div>
    <h2>Add a new drummer</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

// Router and Route Definitions
const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/add">Add</Link></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/add" component={Add}/>
    </div>
  </Router>
);

export default AppRouter;
