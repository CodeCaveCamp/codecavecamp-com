import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';

export class Header extends React.Component {

    onToggle = (e) => {
        const classList = e.target.className.includes('bar') ? e.target.parentNode.classList : e.target.classList; 
        classList.toggle('change');
    };

    render () {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__logo" to='/dashboard'><img src="/images/logo_header.svg" /></Link>
                        <div className="header__navigation-desktop desktop">
                            <NavLink className="header__link" to='/' exact={true} activeClassName='is-active'>Courses</NavLink>
                            <NavLink className="header__link" to='/Team' activeClassName='is-active'>Our Team</NavLink>
                            <NavLink className="header__link" to='/Community' activeClassName='is-active'>Community</NavLink>
                            <NavLink className="header__link" to='/Contact' activeClassName='is-active'>Contact</NavLink>
                            <button className="button" onClick={startLogin}>Login</button>
                        </div>
                        <div className="header__navigation-mobile mobile" onClick={this.onToggle}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


const mapDisatchToProps = (dispatch) => ({
    // pass down to header startLogout
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDisatchToProps)(Header);