import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure 
                    newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input areas">
                    <form>
                        <input
                          type='email'
                          name='email'
                          placeholder='Your email'
                          className='footer-input'
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>  
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/JoinMe'>How it works</Link>
                        <Link to='/JoinMe'>Testimonials </Link>
                        <Link to='/JoinMe'>Careers</Link>
                        <Link to='/JoinMe'>Investors</Link>
                        <Link to='/JoinMe'>How it works</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/JoinMe'>How it works</Link>
                        <Link to='/JoinMe'>Testimonials </Link>
                        <Link to='/JoinMe'>Careers</Link>
                        <Link to='/JoinMe'>Investors</Link>
                        <Link to='/JoinMe'>How it works</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/JoinMe'>How it works</Link>
                        <Link to='/JoinMe'>Testimonials </Link>
                        <Link to='/JoinMe'>Careers</Link>
                        <Link to='/JoinMe'>Investors</Link>
                        <Link to='/JoinMe'>How it works</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/JoinMe'>How it works</Link>
                        <Link to='/JoinMe'>Testimonials </Link>
                        <Link to='/JoinMe'>Careers</Link>
                        <Link to='/JoinMe'>Investors</Link>
                        <Link to='/JoinMe'>How it works</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to ='/' className="social-logo">
                           NG@23 <i className="fab fa-wpexplorer" />
                        </Link>
                    </div>
                        <small className="website-rights">NG@23 @2021</small>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook"
                                to='/'
                                target="_blank"
                                aria-label="Facebook"
                                >
                                    <i className="fab fa-facebook-f" />
                            </Link>
                            <Link className="social-icon-link instagram"
                                to='/'
                                target="_blank"
                                aria-label="Instagram"
                                >
                                    <i className="fab fa-instagram" />
                            </Link>
                            <Link className="social-icon-link youtube"
                                to='/'
                                target="_blank"
                                aria-label="Youtube"
                                >
                                    <i className="fab fa-youtube" />
                            </Link>
                            <Link className="social-icon-link twitter"
                                to='/'
                                target="_blank"
                                aria-label="Twitter"
                                >
                                    <i className="fab fa-twitter" />
                            </Link>
                            <Link className="social-icon-link linkedin"
                                to='/'
                                target="_blank"
                                aria-label="LinkedIn"
                                >
                                    <i className="fab fa-linkedin" />
                            </Link>
                        </div>
                </div>
            </section> 
        </div>
    );
}

export default Footer
