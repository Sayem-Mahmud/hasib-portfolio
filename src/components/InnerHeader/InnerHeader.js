import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import UseDataOthers from '../../hooks/useDataOthers';
import './InnerHeader.css';

const InnerHeader = () => {
    const [others, setOthers] = UseDataOthers();
    console.log(others[0]?.name);

    return (
        <div>
            <div className="d-lg-none site-navbar" style={{ zIndex: 2 }}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                    <div class="container-fluid">
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            {/* <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="/home#home">HOME</a>
                                <a class="nav-link" href="#">BLOG</a>
                                <a class="nav-link" href="#">PORTFOLIO</a>
                                <a class="nav-link disabled">ABOUT</a>
                                <a class="nav-link disabled">Contact</a>
                            </div> */}
                            <ul class="navbar-nav">
                                <li class="nav-item" className="m-3 "><a class="nav-link" href="#home">HOME</a></li>
                                <li class="nav-item" className="m-3"><a class="nav-link" href="#section-blog">BLOG</a></li>
                                <li class="nav-item" className="m-3"><a class="nav-link" href="#section-portfolio">PORTFOLIO</a></li>
                                <li class="nav-item" className="m-3"><a class="nav-link" href="#section-about">ABOUT</a></li>
                                <li class="nav-item" className="m-3"><a class="nav-link" href="#section-contact">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <section class="site-hero " style={{ backgroundImage: `url(${ others[0]?.headerImage})` }} id="section-home" data-stellar-background-ratio="0.5">
                <nav class=" d-none d-lg-block navbar navbar-expand-lg navbar-light bg-transparent justify-content-start mt-4 ">
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <ul class="navbar-nav">
                            <li class="nav-item" className="m-3 "><a class="nav-link text-white" href="#home">HOME</a></li>
                            <li class="nav-item" className="m-3"><a class="nav-link text-white" href="#section-blog">BLOG</a></li>
                            <li class="nav-item" className="m-3"><a class="nav-link text-white" href="#section-portfolio">PORTFOLIO</a></li>
                            <li class="nav-item" className="m-3"><a class="nav-link text-white" href="#section-about">ABOUT</a></li>
                            <li class="nav-item" className="m-3"><a class="nav-link text-white" href="#section-contact">CONTACT</a></li>
                        </ul>
                        {/* <div class="navS">
                        <Nav.Link as={HashLink} to="/home#home" style={{ margin: '20px', textDecoration: 'none', color: 'black' }} >Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#about" style={{ margin: '20px', textDecoration: 'none', color: 'black' }} >About</Nav.Link>
                    </div> */}
                    </div>
                </nav>
                <div class="mt-5">
                    <div class="row intro-text align-items-center justify-content-center mt-5">
                        <div class="col-md-10 text-center pt-5 text-white navbar-nav mt-5 ">
                            <h1 className="site-heading site-animate fadeInUp site-animated mt-5" style={{ zIndex: 1, fontSize: '70px', fontWeight: 200 }}>Hello, I'm <strong class="d-block" style={{ fontWeight: 700 }}>{others[0]?.name}</strong></h1>
                            <strong className="d-block text-white text-uppercase letter-spacing text-white-50" style={{ zIndex: 1, fontWeight: 400 }}>{ others[0]?.aboutSite}</strong>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default InnerHeader;