import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/search-bar/search-bar-container';
import NavBar from './components/nav-bar/nav-bar';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={SearchBar} />
        {/* <Route exact path="/" component={ImageResults} /> */}
        {/* <Route path="/hero/:id" component={HeroImage} /> */}
      </div>
    </BrowserRouter>
  </div>
);


export default App;
