import React, { Component } from 'react';

import Header from './Components/layout/Header';
import Navbar from './Components/layout/Navbar';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <section className="bg shadow"></section>
        <BrowserRouter>
        <div>
          <Header />
          <Navbar />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
