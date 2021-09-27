import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { logOut } from '../services/firebase';
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
                            <Nav.Link className="navbarText" href="/login" onClick={(e) => { logOut(e) }}>Sign Out</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default navbar
