import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import bootstrap from 'bootstrap'

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Navbar</Navbar.Brand>
                    <Nav className="me-auto">

                        {/* <LinkContainer to="/home">

                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer> */}

                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/login">Log In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar