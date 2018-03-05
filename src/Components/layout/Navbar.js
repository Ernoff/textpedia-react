import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {NavItem, Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        {/* <a href="/">TextPedia</a> */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavItem eventKey={2} href="/sign-up">Sign Up</NavItem>
                        <NavItem eventKey={3} href="/how">How It Works</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(NavBar)