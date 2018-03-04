import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import About from './About'
import { Button, Modal } from "react-bootstrap";
import Image from '../../assets/img/research.jpg'

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {        
        return (            
            <div className="container">
                <Button bsStyle="default" className="btn-block" bsSize="small" onClick={this.handleShow}>
                    What is TextPedia
                </Button>
                <figure>
                    <img src={Image} className="img img-responsive" alt="pix of research" />
                </figure>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Why Tetxpedia?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-primary btn-default pull-left" onClick={this.handleClose}>Got it</Button>
                        <Link to="/sign-up" className="btn btn-success btn-default pull-right">Sign up now</Link>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Home;