import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (

        <nav className="uk-navbar-container uk-position-bottom-right" data-uk-navbar>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav" style={{color:'#000000'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                    <li><Link to="/how">How it works</Link></li>
                </ul>
            </div>
        </nav>
    
    );
  }
}

export default Header;
