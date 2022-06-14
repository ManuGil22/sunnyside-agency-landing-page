import { Navbar, Nav, Button } from 'react-bootstrap';
import '../Stylesheets/Header.css';

function Header() {
    
    function handleToggle(){
        const navContainer = document.getElementById('navContainer');
        if (navContainer) {
            if (navContainer.classList.value.includes('navbar-toggled')) {
                navContainer.classList.remove('navbar-toggled');
            } else {
                navContainer.classList.add('navbar-toggled');
            }
        }
    }

    return(
        <Navbar bg="transparent" expand="lg" variant="dark" className="navbar">
                <Navbar.Brand href="#home" className="navbar-brand ms-5 text-white">sunnyside</Navbar.Brand>
                <Navbar.Toggle className='toggler' aria-controls="responsive-navbar-nav" onClick={handleToggle}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='nav-links ms-auto'>
                        <div className='navbar-container' id="navContainer">
                            <Nav.Link className="nav-link" href="#">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Services</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Projects</Nav.Link>
                            <Button variant="light" className='btn fw-bold'>CONTACT</Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;