import React from 'react';
import UseDataOthers from '../../hooks/useDataOthers';
import './Footer.css';
const Footer = () => {
    const [others, setOthers] = UseDataOthers();
    console.log('othersname',others[0]?.name);

    return (
        <div class="bg-black">
            <footer class="site-footer">
                <div class="container">
                    <div class="row mb-5">
                        <p class="col-12 text-center">

                            Copyright © <script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made with <i class="fas fa-heart"></i> by <a href="https://colorlib.com" target="_blank" class="primary">Colorlib</a>

                        </p>
                    </div>
                    <div class="row pb-5">
                        <div class="col-md-12 text-center">
                            <p>
                                <a href={others[0]?.facebookLink} class="social-item"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href={others[0]?.twitterLink} class="social-item"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href={others[0]?.instagramLink} class="social-item"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href={others[0]?.linkedinLink} class="social-item"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;