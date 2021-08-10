import React from 'react';
import PropTypes from 'prop-types';

// Useful link regarding react-burger-menu
// https://github.com/negomi/react-burger-menu
import { slide as Menu } from 'react-burger-menu';

// Import stylesheets here
import '../styling/menubar.css';

function MenuBar(props){
  return (
    <div>
      <Menu>
        <div className="appTitle">
          <h1>{props.title}</h1>
        </div>
        <div className="logoutBtn">
          <button onClick="alert('Logging out')">Logout</button>
        </div>
      </Menu>
    </div>
  );
}

MenuBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default MenuBar;
