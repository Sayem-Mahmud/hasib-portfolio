import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="d-none">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">HOME</a>
                            <a class="nav-link" href="#">PORTFOLIO</a>
                            <a class="nav-link" href="#">BLOG</a>
                            <a class="nav-link disabled">ABOUT</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <Navbar bg="transparent" style={{ height: '60px' }} variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <NavLink></NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center bg-dark">
                        <Nav.Link as={HashLink} to="/home#home" style={{ margin: '10px', textDecoration: 'none', color: 'white' }} >Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#about" style={{ textDecoration: 'none', color: 'white' }}>About</Nav.Link>


                        <Nav.Link as={HashLink} to="/home#more" style={{ textDecoration: 'none', color: 'white' }} >More</Nav.Link>
                        <Nav.Link as={Link} to="/administrative" style={{ textDecoration: 'none', color: 'white' }} >Administrative</Nav.Link>
                        <Nav.Link as={Link} to="/pricing" style={{ textDecoration: 'none', color: 'white' }} >Pricing</Nav.Link>


                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div >
    );
};

export default Header;