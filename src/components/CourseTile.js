import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const CourseTile = () => (
        <Link className='course-tile' to={`/`}>
            <div className='course-tile__header'>
                <div className='course-tile__icon'>
                    <img src='/images/course-icon.png' />
                </div>
                <div className='course-tile__duration'>
                    18 hours
                </div>
            </div>
            <div className='course-tile__body'>
                <h3 className='course-tile__title'>Course Title</h3>
                <div className='course-tile__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            <div className='course-tile__footer'>
                <div className='course-tile__tags'>
                    Beginner
                </div>
                <button className='button button--small'>View Course</button>
            </div>
        </Link>
);

export default CourseTile;