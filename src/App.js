import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/search-bar/search-bar-container';
import NavBar from './components/nav-bar/nav-bar';
import SearchResults from './components/search-results/search-results-container';
import SideBar from './components/sidebar/sidebar-container';

import './App.css';

const App = () => (
  <div className="App">
    <NavBar />
    <SearchBar />
    <SearchResults />
    <SideBar />
  </div>
);


export default App;
