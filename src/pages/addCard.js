import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { AddFlashCard } from "../services/firebase";
import '../App.css';
export default class AddCard extends Component {
    constructor() {
        super();
        this.state = {
            Category: '',
            Definition: '',
            Term: '',
        }
        this.handleTerm = this.handleTerm.bind(this);
        this.handleDefinition = this.handleDefinition.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
    }

    addClick = (e) => {
        e.preventDefault();
        if(this.state.Category === ''){
            alert('No Category selected')
        }else if(this.state.Definition === ''){
            alert('No definition given')
        }else if(this.state.Term === ''){
            alert('No term given');
        }else{
            AddFlashCard(this.state);
        }
    }

    handleTerm(e) {
        this.setState({ Term: e.target.value });
    }

    handleDefinition(e) {
        this.setState({ Definition: e.target.value });
    }

    handleCategory(e){
        this.setState({Category: e.target.text});
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <h1>Add Card</h1>
                    </Col>
                    <Form>
                        <Dropdown>
                            <Dropdown.Toggle /*variant="success"*/ id="dropdown-basic">
                                Category
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.handleCategory} href="#/action-1">Javascript</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleCategory} href="#/action-2">React</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleCategory} href="#/action-3">C#</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleCategory} href="#/action-4">Miscellaneous</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h1>{this.state.Category}</h1>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Term</Form.Label>
                            <Form.Control value={this.state.Term} onChange={this.handleTerm} type="text" placeholder="Enter Term" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Definition</Form.Label>
                            <Form.Control value={this.state.Definition} onChange={this.handleDefinition} type="text" placeholder="Enter Definition" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.addClick}>
                            Add Card
                        </Button>
                    </Form>
                </Row>
            </Container>
        )
    }
}