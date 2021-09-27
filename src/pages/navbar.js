import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { logOut, getUser } from '../services/firebase';
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function navbar(props) {

    return (
        <>
            <Navbar className="mb-5" bg="dark" variant="dark">
                <Container className="navbar">
                    <Navbar.Brand href="/flashcards"><FontAwesomeIcon className="mx-2 navbarText" icon={faBolt} />FlashCards</Navbar.Brand>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link className="navbarText" href="/addcard">Add Card</Nav.Link>
                            <Nav.Link className="navbarText" href="" onClick={() => { getUser(props.user) }}>Get User</Nav.Link>
                            <Nav.Link className="navbarText" href="/login" onClick={(e) => { logOut(e) }}>Sign Out</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
            {/* <Container className="d-flex justify-content-center">
                <Row>
                    <Col md={6}>
                        <Link to="/flashcards"><button className="btn btn-primary">Flashcards</button></Link>
                    </Col>
                    <Col md={6}>
                        <Link to="/addcard"><button className="btn btn-secondary">Add Card</button></Link>
                    </Col>
                    <Col md={6}>
                        <Link to="/login"><button className="btn btn-secondary">Login</button></Link>
                    </Col>
                    <Col md={6}>
                        <button onClick={() => { getUser(props.user) }} className="btn btn-secondary">Get User</button>
                    </Col>
                    <Col md={6}>
                        <Link to="/login"><button onClick={(e) => { logOut(e) }} className="btn btn-secondary">Log Out</button></Link>
                    </Col>
                </Row>
            </Container> */}
        </>
    )
}

export default navbar
