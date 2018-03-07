import React, { Component } from 'react';
// import * as img from "../../assets/img";
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Home</h1>
                    <p>What Textpedia is can be be understood by considering a sample use case.</p>
                    <p>Imagine for a moment that you're in a meeting with an important client and several other participants are present. The presenter or the client mentions a word, or phrase you have only the vaguest idea about. </p>
                    <p>Because of the importance of this meeting you can't use your phone to research the keyword, but you know that if you don't make a note about it or something like that, the pressures of the day will probably cause you to forget.</p>
                    <p>You'd really like to know what the keyword/phrase means so what do you do?</p>        
                    <Link id="more" className="uk-button uk-text-capitalize button uk-button-secondary" to="/how">How it works</Link>
                    {/* <a  href="">Find Out More</a>     */}
                </div>            
            </div>
        );
    }
}

export default Home;
