import React from 'react';
import CourseTile from './CourseTile';
import { connect } from 'react-redux';
import selectCourses from '../selectors/courses';

const CourseList = (props) => (
    <div  className="component-base course-list">
        <div className='component-base__header'>
            <h1 className='component-base__title'>Courses</h1>
            <p className='component-base__subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className='course-list_courses'>
            {props.courses.map((course) => {
                return <CourseTile key={course.title} {...course} />
            })}
        </div>
    </div>
); 

const mapStateToProps = (state) => ({
    courses: selectCourses(state.courses)
});

export default connect(mapStateToProps)(CourseList);