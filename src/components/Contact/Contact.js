import React from 'react';
import UseDataOthers from '../../hooks/useDataOthers';
import './Contact.css'
const Contact = () => {
    const [others, setOthers] = UseDataOthers();
    console.log(others[0]?.name);

    return (
        <div>
            <section class="site-section bg-black" id="section-contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-5">
                            <div class="section-heading text-center">
                                <h2 style={{ color: 'white' }}>Get <strong style={{ fontWeight: 800 }}>In Touch</strong></h2>
                            </div>
                        </div>
                        <div class="col-md-7 mb-5 mb-md-0">
                            <form action="" class="site-form">
                                <h3 class="mb-5 text-start">Get In Touch</h3>
                                <div class="form-group">
                                    <input type="text" class="form-control px-3 py-4" placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control px-3 py-4" placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control px-3 py-4" placeholder="Your Phone" />
                                </div>
                                <div class="form-group mb-5">
                                    <textarea class="form-control px-3 py-4" cols="30" rows="10" placeholder="Write a Message"></textarea>
                                </div>
                                <div class="form-group text-start">
                                    <input type="submit" class="btn btn-pri  px-4 py-3 " value="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5 px-md-5 text-start">
                            <h3 class="mb-5">My Contact Details</h3>
                            <ul class="site-contact-details body">
                                <li>
                                    <span class="text-uppercase d-block" style={{ color: "#243C78", fontWeight: 500 }}>Email</span>
                                    {others[0]?.email}
                                </li>
                                <li>
                                    <span class="text-uppercase d-block" style={{ color: "#243C78", fontWeight: 500 }}>Phone</span>
                                    {others[0]?.phone}
                                </li>
                                <li>
                                    <span class="text-uppercase d-block " style={{ color: "#243C78", fontWeight: 500 }}>Fax</span>
                                    {others[0]?.fax}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;