import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import courseReducer from '../reducers/courses';

// if we are using the dev tools || if we are NOT using the devtools ....
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            courses: courseReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
