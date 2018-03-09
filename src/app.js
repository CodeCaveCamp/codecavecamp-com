import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startGetCourses } from './actions/courses';
import { startGetTeamMembers } from './actions/teamMembers';
import getVisibleCoures from './selectors/courses';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { firebase } from './firebase/firebase';

const store = configureStore();

const getAllData = () => {
    return dispatch => Promise.all([
        dispatch(startGetCourses()),
        dispatch(startGetTeamMembers())
    ]);
}

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(getAllData()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})
