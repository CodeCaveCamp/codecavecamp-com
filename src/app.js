import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addCourse } from './actions/courses';
import getVisibleCoures from './selectors/courses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { firebase } from './firebase/firebase';

const store = configureStore();

store.dispatch(addCourse({ title: 'Jumpstart', description: 'Beginner HTML and CSS', duration: '17 hours', level: 'beginner' }));
store.dispatch(addCourse({ title: 'RAMP', description: 'Advanced HTML and CSS', duration: '6 weeks', level: 'intermediate'  }));

const state = store.getState();
const visibleCourses = getVisibleCoures(state.courses);
console.log(visibleCourses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));