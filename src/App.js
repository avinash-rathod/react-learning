import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import LayoutContainer from './LayoutContainer';

/**
 * Develop an application which has following features
 * 1. Routing
 * 2. Login page with validation
 * 3. Dashboard with top tab menu
 * 4. Google map
 * 5. Google Analytics
 * 6. Facebook login integration
 * 7. Google login integration
 */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <LayoutContainer />
      </BrowserRouter>
    );
  }
}

export default App;
