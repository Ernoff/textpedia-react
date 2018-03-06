import React, { Component } from 'react';
import '../assets/css/App.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from "./layout/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HowItWork from './Pages/HowItWork';
import CreateUser from './User/Register';
import Home from './Pages/Home';
import Confirmation from './User/Confirmation';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <div>
        <div className="row">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={CreateUser} />
          <Route exact path="/how" component={HowItWork} />
          <Route exact path="/confirmation" component={Confirmation} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
