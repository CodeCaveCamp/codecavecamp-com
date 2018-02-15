import React from 'react';
import CourseTile from './CourseTile';

const CourseList = () => (
    <div  className="course-list">
        <div className='course-list__header'>
            <h1 className='title'>Courses</h1>
            <p className='subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className='course-list_courses'>
            <CourseTile />
            <CourseTile />
            <CourseTile />
            <CourseTile />
        </div>
    </div>
); 

export default CourseList;