import React, { Component } from "react";
import axios from 'axios'
import { endpoint_url } from '../utils/index'

import { PulseLoader } from 'halogenium';

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            token: '',
            auth: false,
            error: undefined,
        };
        this.handleChangeToken = this.handleChangeToken.bind(this);
    }
   
 validateToken = (token) => {
        if (token.length === 0) {
            this.setState({ error: 'Please Enter your token'})
            return false
        } else if (token.length < 28) {
            this.setState({ error: 'Invalid Token entered, Token must be 28 character long' })
            return false
        } else {
            return true
        }
    }

    handleChangeToken = (e) => {
        this.setState({ token: e.target.value });
    }

    handleSubmit = (token) => {
        if (this.validateToken(token)) {
            this.submitData(token)
        } else {
            
            this.setState({ error: 'Please Enter a valid Token' })
        }
    }

    expiredToken = (message) => {
        if (message === 'retry in 2 hours') {
            this.setState({ error: 'Expired OTP, please retry in 2 hours' + message })
        } else {
            this.setState({ error: 'an Error has occured, please try again later' })
        }
    }

    submitData = () => {
        const { token } = this.state

        this.setState({ show: true });
        const jwt = this.props.location.state.result;
        let data = JSON.stringify({
            data: {
                token,
                jwt
            }
        })

        axios.post(endpoint_url + 'confirm', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        })
            .then((result) => {
                this.setState({ auth: true, show: false })
                this.props.history.push('/success')
            })
            .catch((err) => {
                this.setState({ error: err.response.data, show: false })

            })
    }

    render() {
        return (
            <span className="uk-form-stacked">
                {this.state.error === undefined ?
                    <div>
                        <h1>Verification</h1>
                        <small style={{ color: 'red' }}> We have sent you an email with your auth token.</small>

                        <div className="uk-margin">
                            <label className="uk-form-label">Token</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text"
                                    placeholder="Enter auth token"
                                    value={this.state.value}
                                    onChange={this.handleChangeToken} />
                            </div>
                        </div>
                        <div className="uk-margin">
                            {this.state.show ? <PulseLoader color="#000000" size="16px" margin="4px" /> : <button className="uk-button uk-text-capitalize button uk-button-secondary" onClick={() => this.submitData()}>Submit</button>}
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
}

export default Confirmation;