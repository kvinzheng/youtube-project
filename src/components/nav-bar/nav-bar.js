import React from 'react';
import {withRouter} from 'react-router-dom';

const NavBar = ({history}) => (
  <div id="navbar">
    <div id="title">
      <div className="menu-item">
        Kevin&apos;s Youtube-Project
      </div>
    </div>
    <div className="home">
      <a onClick={() => {
        history.push('/')
      }}>
        <div className="menu-item">Home Page</div>
      </a>
    </div>
    <div className="nav-links">
      <a href="https://github.com/kvinzheng/youtube-project">
        <div className="menu-item">
          GitHub Code
        </div>
      </a>
    </div>
  </div>
);

export default withRouter(NavBar);
