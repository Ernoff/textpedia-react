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
            <Link className="sign uk-position-top-right" id="signupbtn" to="/sign-up">Sign Up</Link>
        <div className="side uk-width-1-2@m" data-uk-grid>
            <img className="logo" src={img.logo} alt=""/>
            <p>a <span>TEXT</span>  WIKI<span>PEDIA</span></p>
            <h2>KNOWLEDGE AT YOUR FINGERTIPS</h2>

            <a id="more" href="">Find Out More</a>
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
