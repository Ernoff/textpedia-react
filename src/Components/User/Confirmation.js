import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import axios from 'axios'
import { endpoint_url } from '../../utils/index'

class Confirmation extends Component {
    constructor(props) {
        super(props);
        console.log(props);
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
        const { jwt } = this.state
        if (message === 'retry in 2 hours') {
            alert('Expired OTP, please retry in @ hours')
        } else {
            alert('an Error has occured, please try again later')
        }
    }

    submitData = () => {
        const {token} = this.state
       
        this.setState({ show: true });
        const jwt = this.props.history.location.state.result;
        this.props.history.push('/confirmation')
        let data = JSON.stringify({
            data: {
                token,
                jwt
            }
        })
        
        console.log(data)
        
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
            // console.log(result)
            this.setState({ auth: true, show: false })
            // alert('Registration Completed')
            this.props.history.push('/success')
        })
        .catch((err) => {
            console.log(err.response.data)
            this.setState({ show: false })

            // this.setState({ err: err, show: false })
            // let message = err
            // this.expiredToken(err)
        })
    }

    render() {
        const { show, token } = this.state
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <form>
                        <h3 className="textpedia-lg">Confirm Account</h3>
                        <FormGroup>
                            <ControlLabel className="textpedia-label">Enter Token</ControlLabel>
                            <FormControl
                                className="textpedia-input"
                                onChange={this.handleChangeToken}
                                value={this.state.validateToken}
                                placeholder="Enter Token"
                                type="text" />
                        </FormGroup>
                        
                        <Button onClick={() => this.submitData()}>Go!</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Confirmation;