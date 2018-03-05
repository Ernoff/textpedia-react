import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HowItWork extends Component {

    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <h3 className="textpedia-md">How it works!</h3>
                        <p className="textpedia-sm"></p>
                    </div>
                    <div className="col-md-6 ">
                        <h3 className="tp-white">Using Textpedia is as simple as 1 - 2 - 3!</h3>
                        <p></p>
                        <ol>
                            <li className="textpedia-sm">
                                Signup using your phone number and email address, a token will be emailed to
                                you. You'll use this token in the next step to confirm your identity.
                            </li>
                            <li className="textpedia-sm">
                                Confirm your identity by entering the token at the "confirmation" page, upon
                                successful completion of the signup process, a welcome email will be sent to
                                you with the endpoint phone number you can send your keywords to.
                            </li>
                            <li className="textpedia-sm">
                                Whenever you need to conduct preliminary research on any keywords, simply SMS
                                that keyword(s) to the endpoint phone number. When the report has been generated,
                                it will be sent to your email and an SMS notification will be delivered to you.
                            </li>
                        </ol>
                        <p></p>
                    </div>
                    <div className="col-md-6">
                        <h3 className="tp-white">Example usage</h3>
                        <p></p>
                        <ol>
                            <li className="textpedia-sm">
                                SMS "Abraham Lincoln" to the endpoint phone number. Note that this is a
                                single keyword consisting of two words. Multiple keywords are comma separated
                                as shown in the next example.
                            </li>
                            <li className="textpedia-sm">
                                SMS "Abraham Lincoln", "Albert Einstein", "Milky Way" to the endpoint phone number.
                                Note that the search is for three keywords, the report will consist of three sections,
                                one per keyword.
                            </li>
                        </ol>
                        <p></p>
                        <p className="textpedia-sm">
                            Finally, ensure that the keywords are spelled correctly, while Tetxpedia queries are
                            case insensitive, at this time spell checking is not available. Enjoy the Textpedia service.
                        </p>
                    </div>                    
                </div>
                <div className="container">
                    <Link to="/sign-up" className="btn-round">
                        Sign up!
                    </Link>
                </div>
            </div>
        );
    }
}

export default HowItWork;