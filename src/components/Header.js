import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Header extends React.Component {

    onToggle = (e) => {
        const hamburger = e.target.className.includes('bar') ? e.target.parentNode : e.target;
        const bars = hamburger.classList; 
        console.log(bars);
        document.getElementById('nav-mobile').classList.toggle('showMenu');
        bars.toggle('x');
    };

    render () {
        return (
            <header className="header">
                <div className="header__content">
                    <Link className="header__logo" to='/'><img src="/images/logo_header.svg" /></Link>
                    <div className="header__navigation-desktop tablet-desktop">
                        <NavLink className="header__link header__link--desktop" to='/courses' activeClassName='is-active'>Courses</NavLink>
                        <NavLink className="header__link header__link--desktop" to='/team' activeClassName='is-active'>Our Team</NavLink>
                        <NavLink className="header__link header__link--desktop" to='/community' activeClassName='is-active'>Community</NavLink>
                        <NavLink className="header__link header__link--desktop" to='/contact' activeClassName='is-active'>Contact</NavLink>
                    </div>
                    <div className="hamburger mobile"  onClick={this.onToggle}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div id="nav-mobile" className="navlinks-mobile mobile">
                    <NavLink className="header__link header__link--mobile" to='/Courses' activeClassName='is-active'>Courses</NavLink>
                    <NavLink className="header__link header__link--mobile" to='/Team' activeClassName='is-active'>Our Team</NavLink>
                    <NavLink className="header__link header__linke-mobile" to='/Community' activeClassName='is-active'>Community</NavLink>
                    <NavLink className="header__link header__link--mobile" to='/Contact' activeClassName='is-active'>Contact</NavLink>
                </div>
            </header>
        );
    }
}


export default Header;