import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
    <div  className='footer'>
        <div className='footer-sections'>
            <div className='footer-column'>
                <div className='footer__about-code-camp'>
                    <h3 className='footer-heading'>About Code Cave Camp</h3>
                    <Link className='footer-link' to='/courses'>Course Catalog</Link>
                    <Link className='footer-link' to='/faqs'>FAQs</Link>
                    <Link className='footer-link' to='/blog'>Blog</Link>
                    <Link className='footer-link' to='/scholarships'>Scholarships</Link>
                    <Link className='footer-link' to='/testimonials'>Testimonials</Link>
                    <Link className='footer-link' to='/team'>Our Team / Careers</Link>
                </div>
            </div>

            <div className='footer-column'>
                <div className='footer__built-by-grades'>
                    <h3 className='footer-heading'>Built by Grads</h3>
                    <Link className='footer-link' to='/portfolios'>Project Portfolios</Link>
                    <Link className='footer-link' to='/career-services'>Hire Our Grads</Link>
                    <Link className='footer-link' to='/career-services'>Contact Career Services</Link>
                </div>
                <div className='footer__contact-us mobile'>
                    <h3 className='footer-heading'>Contact Us</h3>
                    <p className='footer-phone'>+ 1 (414) 469-2202 (English)</p>
                    <p className='footer-phone'>55 (326) 521-6352 (Spanish)</p>
                </div>
                <div className='footer__partnership-inquiries mobile'>
                    <h3 className='footer-heading'>Partnership Inquiries</h3>
                    <p className='footer-text'>+ 1 (414) 469-2202 (English)</p>
                    <p className='footer-text'>55 (326) 521-6352 (Spanish)</p>
                </div>
            </div>    

            <div className='footer-column tablet-desktop'>
                <div className='footer__contact-us'>
                    <h3 className='footer-heading'>Contact Us</h3>
                    <p className='footer-phone'>+ 1 (414) 469-2202 (English)</p>
                    <p className='footer-phone'>55 (326) 521-6352 (Spanish)</p>
                </div>
                <div className='footer__partnership-inquiries'>
                    <h3 className='footer-heading'>Partnership Inquiries</h3>
                    <p className='footer-text'>+ 1 (414) 469-2202 (English)</p>
                    <p className='footer-text'>55 (326) 521-6352 (Spanish)</p>
                </div>
            </div>

            <div className='footer-column tablet-desktop'>
                <div className='footer__newsletter'>
                    <h3 className='footer-heading'>Newsletter</h3>
                    <p className='footer-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <form className='footer-newsletter-form'>
                        <input className='text-input text-input--small' placeholder='Your Email ...' />
                        <button className='button button--small'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

        <div className='footer__newsletter mobile'>
            <div class='footer__newsletter--heading'>
                <h3 className='footer-heading'>Newsletter</h3>
                <p className='footer-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
            </div>
            <form className='footer-newsletter-form'>
                <input className='text-input text-input--small' placeholder='Your Email ...' />
                <button className='button button--small'>Subscribe</button>
            </form>
        </div>
        <div className='footer__bottom'>
            <div className='footer-copyright'>Code Cave Camp | © Copyright 2018</div>
            <div className='footer-social-icons'>
                <Link className='footer-link' to='/'><img className='social-icon' src='/images/icon-twitter.png' /></Link>
                <Link className='footer-link' to='/'><img className='social-icon' src='/images/icon-facebook.png' /></Link>
                <Link className='footer-link' to='/'><img className='social-icon' src='/images/icon-dribble.png' /></Link>
            </div>
        </div>
    </div>
); 

export default Footer;