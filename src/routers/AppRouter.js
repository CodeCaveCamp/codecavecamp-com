// Libraries
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Pages
import LoginPage from '../components/LoginPage';
import LandingPage from '../components/LandingPage';
import CoursesPage from '../components/CoursesPage';
import AddCoursePage from '../components/AddCoursePage';

// Components
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className='body'>
            <Header />
            <Switch>
                <Route path='/' exact={true} component={LandingPage} />
                <Route path='/courses' exact={true} component={CoursesPage} />
                <Route path='/courses/add' component={AddCoursePage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;