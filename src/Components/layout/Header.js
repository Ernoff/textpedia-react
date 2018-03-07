import React, { Component } from 'react';
import Form from './Form';
import Home from '../Home';
import HowItWork from '../HowItWork';
import { Link } from "react-router-dom";
import * as img from "../../assets/img";
import { Switch, Route } from 'react-router-dom';
import Confirmation from '../Confirmation';
import Success from '../Success';

class Header extends Component {
  render() {
    return (
     
       <header className='uk-grid' data-uk-grid>
            {/* <a className="sign uk-position-top-right" id="signupbtn" href="">Sign Up</a> */}
            <nav className="sign uk-navbar-container uk-position-top-right" data-uk-navbar>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav" style={{ color: '#ffffff' }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sign-up">Sign Up</Link></li>
                        <li><Link to="/how">How it works</Link></li>
                    </ul>
                </div>
            </nav>    
            
        <div className="side uk-width-1-2@m" data-uk-grid>
            <h1 className="uk-text-bold">TEXTPEDIA</h1>
            <p>a <span>TEXT</span>  WIKI<span>PEDIA</span></p>
            <h2>KNOWLEDGE AT YOUR FINGERTIPS</h2>     
        </div>
        <div className="uk-width-1-2@m" >
                <div className="form uk-card uk-card-body uk-width-2-3@m uk-overflow-hidden uk-align-center">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/sign-up" component={Form} />
                        <Route exact path="/how" component={HowItWork} />
                        <Route exact path="/confirmation" component={Confirmation} />
                        <Route exact path="/success" component={Success} />                        
                    </Switch>
                </div>
            </div>
    	</header>   
      
    );
  }
}

export default Header;
