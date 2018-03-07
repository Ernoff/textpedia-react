import React, { Component } from 'react';
// import * as img from "../../assets/img";


class Home extends Component {
    render() {
        return (
            <div style={{overflowY:'scroll', height:400 }}>
            <h1>Home</h1>
            <p>What Textpedia is can be be understood by considering a sample use case.</p>
            <p>Imagine for a moment that you're in a meeting with an important client and several
                other participants are present. The presenter or the client mentions a word, or phrase
                            you have only the vaguest idea about. </p>
            <p>Because of the importance of this meeting you can't use your phone to research the keyword,
                but you know that if you don't make a note about it or something like that, the
                            pressures of the day will probably cause you to forget.</p>
            <p>You'd really like to know what the keyword/phrase means so what do you do?</p>
            <p>You could...</p>
            <ol>
                <li>Make a reminder to yourself, imagine having to take a minute or so to covertly
                                type out this reminder while the gist of the meeting passes you by. Not good!</li>
                <li>Trust in your memory to remember to check out the keyword at the end of the day.
                                Even worse!</li>
                <li>Spend 10 seconds or less to type out the keyword/phrase and SMS it to
                    Textpedia safe in the knowledge that when you check your mail at the end of
                    the day, you'll have a nicely formatted preliminary report waiting for you.
                    This allows you to decide whether or not you want to dig deeper into the
                                subject. Awesome!</li>
            </ol>
            <p></p>
            </div>
        );
    }
}

export default Home;
