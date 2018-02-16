import React from 'react';

const EnrollmentCallout = () => (
    <div  className="enrollment">
        <h1>Considering Enrollment</h1>
        <div className='enrollment-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <form className='enrollment-form'>
            <input className='text-input' placeholder='Name ... ' />
            <input className='text-input' placeholder='Email ... ' />
            <button className='button'>More Info Please</button>
        </form>
    </div>
); 

export default EnrollmentCallout;