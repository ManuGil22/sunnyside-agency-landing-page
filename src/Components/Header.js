import { Navbar, Nav, Button } from 'react-bootstrap';
import '../Stylesheets/Header.css';

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
                <Navbar.Brand href="#home" className="navbar-brand ms-5">sunnyside</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='nav-links ms-auto'>
                        <Nav.Link className="nav-link text-white" href="#">About</Nav.Link>
                        <Nav.Link className="nav-link text-white" href="#">Services</Nav.Link>
                        <Nav.Link className="nav-link text-white" href="#">Projects</Nav.Link>
                        <Button variant="light" className='btn fw-bold'>CONTACT</Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;