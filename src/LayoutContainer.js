import React, { Component } from 'react';
import { Route } from "react-router-dom";

import LoginPage from "./Pages/Login";
import Home from "./Pages/Home";

class LayoutContainer extends Component {
    render() {
      return (
        <div>
          <Route path="/" exact component={ LoginPage } />

          <Route path="/home" exact component={ Home } />

          <Route path="/about" exact render={
            () => {
              return <h1>Welcome About</h1>
            }
          }/>
        </div>
      );
    }
  }
  
  export default LayoutContainer;
  