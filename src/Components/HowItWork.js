import React, { Component } from 'react';
// import * as img from "../../assets/img";


class Form extends Component {
    render() {
        return (
            <div className="scrollbar" id="tp-scroll">
                <div className="force-overflow">
                <h3>Using Textpedia is as simple as 1 - 2 - 3!</h3>
                <p>Signup using your phone number and email address, a token will be emailed to
                    you. You'll use this token in the next step to confirm your identity.</p>
                <p>Confirm your identity by entering the token at the "confirmation" page, upon
                    successful completion of the signup process, a welcome email will be sent to
                    you with the endpoint phone number you can send your keywords to. </p>
                
                <p>Whenever you need to conduct preliminary research on any keywords, simply SMS
                    that keyword(s) to the endpoint phone number. When the report has been generated,
                    it will be sent to your email and an SMS notification will be delivered to you.</p>
                
                <p>Finally, ensure that the keywords are spelled correctly, while Tetxpedia queries are
                    case insensitive, at this time spell checking is not available. Enjoy the Textpedia service.</p>
                <p></p>
                </div>
            </div>
        );
    }
}

export default Form;
