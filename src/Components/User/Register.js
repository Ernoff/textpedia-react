import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button, Modal, Well } from "react-bootstrap";
// import ProgressButton from 'react-progress-button'
import axios from 'axios';
// import request from 'superagent';

class CreateUser extends Component {
    
    constructor(props, context) {
        super(props, context);

        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this); 
        
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        this.state = {
            email: '',
            phoneNumber: '',
            error: '',
            show: false
        }        
    }

    // getValidationState = () => {
    //     const length = this.state.phonenumber.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    // }

    handleChangePhone = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handleModalClose() {
        this.setState({ show: false });
    }

    handleModalShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <form >                        
                        <h3 className="textpedia-lg">Sign Up!</h3>
                        <FormGroup>
                            <ControlLabel className="textpedia-label">Phone Number</ControlLabel>
                            <FormControl
                                className="textpedia-input"
                                // preferredCountries={['ng']}
                                // css={['intl-tel-input', 'form-control']}
                                // utilsScript={'libphonenumber.js'}
                                onChange={this.handleChangePhone}
                                value={this.state.phonenumber}
                                placeholder="Enter Phone Number"
                                type="text" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel className="textpedia-label">Email Address</ControlLabel>
                            <FormControl
                                type="email"
                                className="textpedia-input"
                                value={this.state.value}
                                placeholder="Enter Email"
                                onChange={this.handleChangeEmail}
                                />
                        </FormGroup>
                        <Button className="btn-round" onClick={() => this._createUser()}>Go!</Button>
                    </form>
                </div>
                <Modal show={this.state.show} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your sign up details...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please confim the validity of the following details before submitting, if there's an error you can use the 'Edit' button to make any changes.</p>

                        <Well bsSize="large">
                            <p>Your phone number: {this.state.phoneNumber}</p>
                            <p>Your email address: {this.state.email}</p>
                        </Well>                       

                        <p>If everything looks ok, please submit the form. We will send a token to the email address you've provided.</p>

                        <p>You'll need the token to confirm your identity in the next step.</p>

                        <p><strong>The token is valid for 5 minutes only!</strong></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this._createUser()}>Register</Button>
                    </Modal.Footer>
                </Modal>               
            </div>
        )
    }

    _createUser =  () => {
        console.log("submitting")
        const { 
            email,
            phoneNumber
        } = this.state

        let data =
        // JSON.stringify(
            {
            data: {
                phoneNumber,
                email
            }
        }
    // )

        console.log(data)
        let url = 'https://textpedia-api.herokuapp.com/submit'        
        axios.post(url, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        })
        .then((result) => {            
            console.log(result.response.data)
        })
        .catch((err) => {
            console.log(err)
        });
    }
}

export default CreateUser