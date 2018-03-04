import React, { Component } from 'react';
import '../assets/css/App.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from "./layout/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HowItWork from './Pages/HowItWork';
import CreateUser from './User/Register';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <div className="container">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={CreateUser} />
          <Route exact path="/how" component={HowItWork} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
