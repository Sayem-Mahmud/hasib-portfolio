import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseDataOthers from '../../hooks/useDataOthers';
import Contact from '../Contact/Contact';
import './AboutMe.css';

const AboutMe = () => {
    const [others, setOthers] = UseDataOthers();
    console.log(others[0]?.name);

    return (
        <div>
            <div class="bg-black text-white">
                <section class="site-section" id="section-about">
                    <div class="container">
                        <div class="row mb-5 align-items-center">
                            <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                                <img src="https://preview.colorlib.com/theme/rezume/images/ximage_1.jpg.pagespeed.ic.X2zR0KHyU5.webp" alt="Image placeholder" class="img-fluid" data-pagespeed-url-hash="274471619" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                            </div>
                            <div class="col-lg-5 pl-lg-5 text-start ps-0 ps-lg-5 ">
                                <div class="section-heading">
                                    <h2>About <strong>Me</strong></h2>
                                </div>
                                <div style={{ color: 'rgba(255, 255, 255, .4)' }}>
                                    <p class="lead">{others[0]?.aboutMe1stPara}</p>
                                    <p class="mb-5  ">{others[0]?.aboutMe2ndPara}</p>
                                    <p>
                                        {/* <a href="#section-contact" class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a> */}
                                        <a href={others[0]?.downloadCv} class="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
                                        {/* <a href="#" class="btn btn-secondary px-4 py-2 btn-sm" ><Link className="download-resume-btn"
                                            // to={resume}
                                            target="_blank" download>Download CV</Link></a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* contact */}

            {/* <Contact></Contact> */}

        </div >
    );
};

export default AboutMe;