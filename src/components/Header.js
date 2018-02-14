import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';

export const Header = ({ startLogin, startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__logo" to='/dashboard'><img src="/images/logo_header.svg" /></Link>
                <div className="header__navigation">
                    <NavLink className="header__link" to='/' exact={true} activeClassName='is-active'>Courses</NavLink>
                    <NavLink className="header__link" to='/Team' activeClassName='is-active'>Our Team</NavLink>
                    <NavLink className="header__link" to='/Community' activeClassName='is-active'>Community</NavLink>
                    <NavLink className="header__link" to='/Contact' activeClassName='is-active'>Contact</NavLink>
                    <button className="button" onClick={startLogin}>Login</button>
                </div>
            </div>
        </div>
    </header>
);

const mapDisatchToProps = (dispatch) => ({
    // pass down to header startLogout
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDisatchToProps)(Header);