import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Success extends Component {
    
    render() {        
        return (
            <div className="text-center">
                <div className="container">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3 className="textpedia-lg">Success!</h3>
                        <h3 className="textpedia-desc tp-bm40">Your account has been confirmed</h3>
                        <Link to="/" className="tp-hiw-btn">
                                Continue
                        </Link>
                    
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Success;