import React from 'react';

import Hero from './Hero';
import CourseList from './CourseList';
import Testimonials from './Testimonials';
import Team from './Team';
import Enrollment from './Enrollment';
import Community from './Community';

const LandingPage = () => (
    <div>
        <Hero />
        <CourseList />
        <Testimonials />
        <Team />
        <Enrollment />
        <Community />
    </div>
); 

export default LandingPage;