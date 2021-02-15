import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import JoinUs from './components/JoinUs/JoinUs';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/join-us" component={JoinUs} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
