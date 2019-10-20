import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Things } from './Things/Things';
import { Nav } from './Nav/Nav';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about">
            <About className="App__container" />
          </Route>
          <Route path="/contact">
            <Contact className="App__container" />
          </Route>
          <Route path="/things">
            <Things className="App__container" />
          </Route>
          <Route path="/">
            <Home className="App__container" />
          </Route>
        </Switch>
        <footer>Michael D Sharp 2019</footer>
      </div>
    </Router>
  );
}

export default App;
