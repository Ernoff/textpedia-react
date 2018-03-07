import React, { Component } from 'react';
import { endpoint_url, isValidEmail } from '../../utils/index';
import axios from 'axios';
import * as img from "../../assets/img";
import { PulseLoader } from 'halogenium'


class Form extends Component {
    constructor() {
        super();

        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.state = {
            email: '',
            phoneNumber: '',
            error: undefined,
            show: false
        }
    }

    getValidationState = (email, phoneNumber) => {
        if (email.length === 0) {
            alert('Email can not be empty')
            return false
        } else if (!isValidEmail.test(email)) {
            alert('Enter a Valid Email Address')
            return false
        } else if (phoneNumber.length === 0) {
            alert('Enter a Valid Phone Number')
            return false
        } else {
            return true
        }
    }

    handleChangePhone = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    render() {
        return (

            <span className="uk-form-stacked">
                {this.state.error === undefined ?
                    <div>
                        <img className="logo" src={img.logo2} alt="" />
                        <h1>Sign Up</h1>

                        <div className="uk-margin">
                            <label className="uk-form-label">Phone Number</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text"
                                    value={this.state.value}
                                    placeholder="Enter Phone Number"
                                    onChange={this.handleChangePhone} />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="email">Email</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="email" type="email"
                                    value={this.state.value}
                                    placeholder="Enter Email"
                                    onChange={this.handleChangeEmail} />
                            </div>
                        </div>
                        <div className="uk-margin">
                            {this.state.show ? <PulseLoader color="#000000" size="16px" margin="4px" /> : <button className="uk-button uk-text-capitalize button uk-button-secondary" onClick={() => this._createUser()}>Sign up</button>}
                        </div>
                    </div>
                    :
                    <div>
                        <div className="uk-card uk-card-default uk-card-small uk-card-body">
                            <h3 className="uk-card-title">Error</h3>
                            <p>{this.state.error}</p>
                            <button className="uk-button uk-text-capitalize button uk-button-secondary" onClick={() => this.setState({ error: undefined })}>Okay</button>
                        </div>
                    </div>}
            </span>
        );
    }

    _createUser = () => {
        const {
            email,
            phoneNumber
        } = this.state

        let data = {
            data: {
                phoneNumber,
                email
            }
        }

        axios.post(endpoint_url + 'submit', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        })
        .then((result) => {

            this.props.history.push({
                pathname: '/confirmation',
                state: { result: result.data.jwt }
            })
        })
        .catch((err) => {
            if (err.response.status === 409) {
                this.setState({ error: err.response.data })
            } else {
                this.setState({ error: 'Ops... error occured' })
            }
            this.setState({ show: false })
        });
    }
}

export default Form;