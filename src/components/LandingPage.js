import React from 'react';

import Hero from './Hero';
import CourseList from './CourseList';
import Testimonials from './Testimonials';
import TeamList from './TeamList';
import Enrollment from './Enrollment';
import Community from './Community';

const LandingPage = () => (
    <div>
        <Hero />
        <CourseList />
        <Testimonials />
        <div className='tablet-desktop'>
            <TeamList />
        </div>
        <Enrollment />
        <Community />
    </div>
); 

export default LandingPage;