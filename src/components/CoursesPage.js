import React from 'react';
import Hero from './Hero';
import CourseList from './CourseList';
import Testimonials from './Testimonials';
import Enrollment from './Enrollment';

const LandingPage = () => (
    <div>
        <CourseList />
        <Enrollment />
        <Testimonials />
    </div>
); 

export default LandingPage;