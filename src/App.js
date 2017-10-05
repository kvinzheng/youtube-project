import React from 'react';
import SearchBar from './components/search-bar/search-bar-container';
import NavBar from './components/nav-bar/nav-bar';
import VideoPlayer from './components/video-player/video-player-container';
import ImageCard from './components/image-cards/image-cards-container';
import './App.css';

const App = () => (
  <div className="App">
    <NavBar/>
    <SearchBar/>
    <VideoPlayer/>
    <ImageCard/>
  </div>
);

export default App;
