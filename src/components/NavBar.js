import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux';
import '../App.css'

function NavBar() {
    const userLoggedIn = useSelector(selectUser);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Dictionary</Navbar.Brand>
                    <Nav className="me-auto">
                        {
                            userLoggedIn ? <Nav.Link href="/" className="text-danger" >logout</Nav.Link> : <Nav.Link href="/login" className="text-success">Log In</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar