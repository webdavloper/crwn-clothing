import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.componet";

const Hats = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
