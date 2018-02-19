import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startGetCourses } from './actions/courses';
import getVisibleCoures from './selectors/courses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startGetCourses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})
