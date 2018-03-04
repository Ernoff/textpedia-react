import React, { Component } from 'react'
// import { graphql } from 'react-apollo'
import IntlTelInput from 'react-intl-tel-input';
import '../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../../../node_modules/react-intl-tel-input/dist/main.css';
import { FormGroup, FormControl, ControlLabel, Button, Modal, Well } from "react-bootstrap";
// import ConfirmModal from "./ConfirmModal";
import axios from 'axios';

class CreateUser extends Component {
    
    constructor(props, context) {
        super(props, context);

        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this); 
        
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        this.state = {
            email: '',
            phonenumber: '',
            error: '',
            show: false
        }        
    }

    getValidationState = () => {
        const length = this.state.phonenumber.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChangePhone = (e) => {
        this.setState({ phonenumber: e.target.value });
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
                        <h3>Sign Up!</h3>
                        <FormGroup validationState={this.getValidationState()}>
                            <ControlLabel>Phone Number</ControlLabel>
                            <IntlTelInput
                                preferredCountries={['ng']}
                                css={['intl-tel-input', 'form-control']}
                                utilsScript={'libphonenumber.js'}
                                onChange={this.handleChangePhone}
                                value={this.state.value}
                                type="number" />
                        </FormGroup>
                        <FormGroup validationState={this.getValidationState()}>
                            <ControlLabel>Email Address</ControlLabel>
                            <FormControl
                                type="email"
                                value={this.state.value}
                                placeholder="Enter Email"
                                onChange={this.handleChangeEmail}/>
                        </FormGroup>
                        <Button className="btn btn-primary pull-right" onClick={this.handleModalShow}>Go!</Button>
                    </form>
                </div>
                <Modal show={this.state.show} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your sign up details...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please confim the validity of the following details before submitting, if there's an error you can use the 'Edit' button to make any changes.</p>

                        <Well bsSize="large">
                            <p>Your phone number: {this.state.phonenumber}</p>
                            <p>Your email address: {this.state.email}</p>
                        </Well>                       

                        <p>If everything looks ok, please submit the form. We will send a token to the email address you've provided.</p>

                        <p>You'll need the token to confirm your identity in the next step.</p>

                        <p><strong>The token is valid for 5 minutes only!</strong></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>               
            </div>
        )
    }

    _createUser = async () => {
        console.log("submitting")
        const { 
            email,
            phonenumber
        } = this.state

        await axios.post('https://textpedia-clone.herokuapp.com/register', { phonenumber, email }).then((result) => {
            this.props.history.push("/")
            console.log(result)
        });
    }
}

export default CreateUser