import React, { Component } from "react";
// import { Modal, Button } from "react-bootstrap";
import { FormGroup, FormControl, ControlLabel, Button, Modal, Well } from "react-bootstrap";
import axios from 'axios'
import { endpoint_url } from '../../utils/index'

class Confirmation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            takon: '',
            auth: false,
            errror: ''
        };
    }

    validateToken = (token) => {
        if (token.lenght == 0) {
            return false
        } else {
            return true
        }
    }

    handleSubmit = (token) => {
        if (this.validateToken(token)) {
            this.submitData(token)
        } else {
            alert('Please Enter a valid Token')
        }
    }

    submitData = (token) => {
        this.setState({ show: true });
        const jwt = this.props.navigation.state.params.res;
        let data = JSON.stringify({
            data: {
                token,
                jwt
            }
        })

        axios.post(endpoint_url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((result) => {
                this.setState({ auth: true, show: false })
                alert('Registration Completed')
            })
    }

    render() {
        const { show, token } = this.state
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
            </div>
        );
    }
}

export default Confirmation;