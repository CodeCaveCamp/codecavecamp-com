import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'; // to allow us to use middleware
import { 
    addCourse, 
    editCourse,
    removeCourse,
    getCourses,
    startGetCourses
} from '../../actions/courses';
import courses from '../fixtures/courses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

// set up some dummy data

beforeEach((done) => {  
    const coursesData = {};
    courses.forEach(({ id, title, description, duration, level, createdAt}) => {
        coursesData[id] = { title, description, duration, level, createdAt };
    });
    database.ref('courses').set(coursesData).then(() => done());
})

test('should setup remove course action object', () => {
    const action = removeCourse({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_COURSE',
        id: '123abc'
    });
});


test('should setup edit course action objetc', () => {
    const action = editCourse('34', { title: 'new title' });
    expect(action).toEqual({
        type: 'EDIT_COURSE',
        id: '34',
        updates: {
            title: 'new title'
        }
    });
});

test('should setup add course action object with provided values', () => {
    const action = addCourse(courses[0]);
    expect(action).toEqual({
        type: 'ADD_COURSE',
        course: courses[0]
    });
});

test('should setup get course action object with data', () => {
    const action = getCourses(courses);
    expect(action).toEqual({
        type: 'GET_COURSES',
        courses
    });
});

test('should fetch the courses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startGetCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'GET_COURSES',
            courses
        });
        done();
    });
});
