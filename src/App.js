import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SearchBar from './components/search-bar/search-bar-container';
import NavBar from './components/nav-bar/nav-bar';
import VideoPlayer from './components/video-player/video-player-container';
import ImageCard from './components/image-cards/image-cards-container';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route path='/' component={NavBar}/>
      <Route exact path='/' component={SearchBar}/>
      <Route exact path='/' component={ImageCard}/>
      <Route path='/video' component={VideoPlayer}/>
    </div>
  </BrowserRouter>
);

export default App;
