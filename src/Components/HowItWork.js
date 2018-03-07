import React, { Component } from 'react';
// import * as img from "../../assets/img";


class Form extends Component {
    render() {
        return (

            <div style={{ overflowY: 'scroll', height: 400 }}>
                <h5>Using Textpedia is as simple as 1 - 2 - 3!</h5>
                <p>Signup using your phone number and email address, a token will be emailed to
                                    you. You'll use this token in the next step to confirm your identity.</p>
                <p>Confirm your identity by entering the token at the "confirmation" page, upon
                                    successful completion of the signup process, a welcome email will be sent to
                                    you with the endpoint phone number you can send your keywords to. </p>
                
                <p>Whenever you need to conduct preliminary research on any keywords, simply SMS
                                    that keyword(s) to the endpoint phone number. When the report has been generated,
                                    it will be sent to your email and an SMS notification will be delivered to you.</p>
                <h5>Example usage</h5>
                <p>SMS "Abraham Lincoln" to the endpoint phone number. Note that this is a
                                    single keyword consisting of two words. Multiple keywords are comma separated
                                    as shown in the next example.</p>
                
                <p>SMS "Abraham Lincoln", "Albert Einstein", "Milky Way" to the endpoint phone number.
                                    Note that the search is for three keywords, the report will consist of three sections,
                                    one per keyword.</p>
                <p>Finally, ensure that the keywords are spelled correctly, while Tetxpedia queries are
                                case insensitive, at this time spell checking is not available. Enjoy the Textpedia service.</p>
                <p></p>
            </div>
        );
    }
}

export default Form;
