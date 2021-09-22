import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Dropdown, Dropdownmenu, DropdownToggle } from "react-bootstrap";
import { AddFlashCard } from "../services/firebase";

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
    }

    addClick = (e) => {
        e.preventDefault();
        console.log('click');
        console.log(this.state);
        // AddFlashCard(this.state);
    }

    handleTerm(e) {
        this.setState({ Term: e.target.value });
        // console.log(e.target.value);
    }

    handleDefinition(e) {
        this.setState({ Definition: e.target.value });
        console.log(e.target.value);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <h1>Add Card</h1>
                    </Col>
                    <Form>
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category" />
                        </Form.Group> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Javascript</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">React</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">C#</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Miscellaneous</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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