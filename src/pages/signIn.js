import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { logIn } from "../services/firebase";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router";
import '../styles/signInStyle.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import FlashCard from '../pages/flashcard.component'; 

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            signedIn: false,
            currentUser: '',
            history: props.history
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.test = this.test.bind(this);
    }

    handleSubmit(e) {
        logIn(this.state.email, this.state.password, this.state.history);
        e.preventDefault();
        setTimeout(() => {
            console.log(getAuth().currentUser.email);
            if (this.state.currentUser === '') {
                this.setState({ currentUser: getAuth().currentUser.email })
            }
        }, 1000);
        this.props.history.push('/flashcards');
    }

    handleEmail(e) {
        this.setState({ email: e.target.value });
    }

    handlePass(e) {
        this.setState({ password: e.target.value });
    }

    test(e) {
        
        console.log(this.state.history);
    }

    render() {
        return (
            <>
                <Container className="signInBG">
                    <Router>
                        <h1 className="d-flex justify-content-center">Welcome to the login page</h1>
                        <h2>{this.state.currentUser}</h2>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={this.email} onChange={this.handleEmail} required type="email" placeholder="Enter email" />
                                <Form.Text className="warningText">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={this.password} onChange={this.handlePass} required type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                            <Button variant="primary" onClick={this.test}>
                                Test
                            </Button>
                        </Form>
                        <Switch>
                            <Route path="/flashcards">
                                <FlashCard/>
                            </Route>
                        </Switch>
                    </Router>
                </Container>
            </>
        )
    }
}