import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const CourseTile = ({ title, description, duration, level }) => (
        <Link className='course-tile' to={`/`}>
            <div className='course-tile__header'>
                <div className='course-tile__icon'>
                    <img src='/images/course-icon.png' />
                </div>
                <div className='course-tile__duration'>
                    { duration }
                </div>
            </div>
            <div className='course-tile__body'>
                <h3 className='course-tile__title'>{ title }</h3>
                <div className='course-tile__description'>{ description }</div>
            </div>
            <div className='course-tile__footer'>
                <div className='course-tile__tags'>{ level }</div>
                <button className='button button--small mobile-tablet'>View</button>
                <button className='button button--small desktop'>View Course</button>
            </div>
        </Link>
);

export default CourseTile;