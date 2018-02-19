import coursesReducer from '../../reducers/courses';
import moment from 'moment';
import courses from '../fixtures/courses';

// set default state
test('should set up default values', () => {
    const state = coursesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

// ADD_COURSE
test('should be able to add an course', () => {
    const course = {
        id: '12',
        title: 'Animation',
        description: 'Javascript and CSS animation',
        duration: '6 hours',
        level: 'beginner',
        createdAt: 2000,
    };
    const action = {
        type: 'ADD_COURSE',
        course
    };
    const state = coursesReducer(courses, action);
    expect(state).toEqual([...courses, course]);
});


// EDIT_COURSE
test('should be able to edit a course', () => {
    const level = 'adnvanced';
    const action = {
        type: 'EDIT_COURSE',
        id: courses[1].id,
        updates: {
            level
        }
    };
    const state = coursesReducer(courses, action);
    expect(state[1].level).toBe(level);
});

test('should not be able to edit a course if course has not been found', () => {
    const duration = '5 hours';
    const action = {
        type: 'EDIT_COURSE',
        id: -1,
        updates: {
            duration
        }
    };
    const state = coursesReducer(courses, action);
    expect(state).toEqual(courses);
});

// REMOVE_COURSE
test('should be able to remove a course by id', () => {
    const action = {
        type: 'REMOVE_COURSE',
        id: '1'
    };
    const state = coursesReducer(courses, action);
    expect(state).toEqual([courses[1]]);
});

test('should be able to remove a course if id is not found', () => {
    const action = {
        type: 'REMOVE_COURSE',
        id: '7'
    };
    const state = coursesReducer(courses, action);
    expect(state).toEqual(courses);
});

test('should get courses', () => {
    const action = {
        type: 'GET_COURSES',
        courses: [courses[1]]
    };
    const state = coursesReducer(courses, action);
    expect(state).toEqual([courses[1]]);
});