import React from 'react';
import { Switch, Route } from "react-router-dom";

import Child from './screen/Child';
import Lutin from './screen/Lutin';

import Home from './screen/Home';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/child">
          <Child />
        </Route>
        <Route path="/lutin">
          <Lutin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
