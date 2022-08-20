import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseDataOthers from '../../hooks/useDataOthers';
import './Hasib.css'

const Hasib = () => {
    const [others, setOthers]=UseDataOthers();
    return (
        <div>
            <Navbar style={{ height: '55px', color: 'black', backgroundColor: 'rgb(160, 156, 156)' }} fixed="top" collapseOnSelect expand="lg" >
                <Container style={{ backgroundColor: 'rgb(160, 156, 156)' }}>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center ">
                        <Nav.Link as={HashLink} to="/" style={{ margin: '10px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', backgroundColor: 'white' }} >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/addB-P" style={{ margin: '10px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', backgroundColor: 'white' }}>Add Portfolio/Blog</Nav.Link>
                        <Nav.Link as={HashLink} to="/updateB-p" style={{ margin: '10px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', backgroundColor: 'white' }} >Update porfolio/Blog</Nav.Link>
                        <Nav.Link as={Link} to={`/update-others/${others[0]?._id}`} style={{ margin: '10px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', backgroundColor: 'white' }} >Update Others</Nav.Link>
                        {/* <Nav.Link as={Link} to='/message' style={{ margin: '10px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', backgroundColor: 'white' }} >All message</Nav.Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Hasib;