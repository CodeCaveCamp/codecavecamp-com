import React from 'react';

import Hero from './Hero';
import CourseList from './CourseList';
import Testimonials from './Testimonials';
import Team from './Team';
import EnrollmentCallout from './EnrollmentCallout';
import Community from './Community';

const LandingPage = () => (
    <div className='body'>
        <Hero />
        <CourseList />
        <Testimonials />
        <Team />
        <EnrollmentCallout />
        <Community />
    </div>
); 

export default LandingPage;