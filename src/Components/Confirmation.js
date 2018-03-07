import React, { Component } from "react";
import axios from 'axios'
import { endpoint_url } from '../utils/index'
import * as img from "../assets/img";

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            token: '',
            auth: false,
            error: ''
        };
        this.handleChangeToken = this.handleChangeToken.bind(this);

    }

    validateToken = (token) => {
        if (token.length === 0) {
            alert('Please Enter your token')
            return false
        } else if (token.length < 28) {
            alert('Invalid Token entered, Token must be 28 character long')
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
            alert('Please Enter a valid Token')
        }
    }

    expiredToken = (message) => {
        if (message === 'retry in 2 hours') {
            alert('Expired OTP, please retry in 2 hours' + message)
        } else {
            alert('an Error has occured, please try again later')
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
            alert(err.response.data)
            this.setState({ show: false })
        })
    }

    render() {
        return (
            <span className="uk-form-stacked">
                <img className="logo" src={img.logo2} alt="" />
                <h1>Confirmation</h1>

                <div className="uk-margin">
                    <label className="uk-form-label">Enter Token</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" type="text" 
                            placeholder="Enter Token"
                            value={this.state.value}
                            onChange={this.handleChangeToken} />
                    </div>
                </div>
                <div className="uk-margin">
                    <button className="uk-button uk-text-capitalize button uk-button-secondary" onClick={() => this.submitData()}>Submit</button>
                </div>
            </span> 
        );
    }
}

export default Confirmation;