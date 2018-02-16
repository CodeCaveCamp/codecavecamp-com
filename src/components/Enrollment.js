import React from 'react';

const EnrollmentCallout = () => (
    <div  className="component-base enrollment">
        <div className='component-base__header'>
            <h1 className='component-base__title'>Considering Enrollment</h1>
            <p className='component-base__subtitle'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <form className='enrollment-form'>
            <input className='text-input' placeholder='Name ... ' />
            <input className='text-input' placeholder='Email ... ' />
            <button className='button'>More Info Please</button>
        </form>
    </div>
); 

export default EnrollmentCallout;