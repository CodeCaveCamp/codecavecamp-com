import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/lib/fa';

const TeamTile = ({ id, name, status, title, bio, facebook, linkedIn, twitter, dribbble, profileImageURL }) => (
    <div  className="team-tile">
        <img className='profile-icon' src={ profileImageURL ? profileImageURL : '/images/icon-team-profile.png' } />
        <div className='team-member-name'>{ name }</div>
        <div className='team-member-title'>{ title }</div>
        { status !== 'hiring'
            ? 
                <div className='social-media-icons'>
                    { !!facebook && (<a className='social-media-icon' href={ facebook } target='_blank'><FaFacebook /></a>) }
                    { !!linkedIn && (<a className='social-media-icon' href={ linkedIn } target='_blank'><FaLinkedin /></a>) }
                    { !!twitter && (<a className='social-media-icon' href={ twitter } target='_blank'><FaTwitter /></a>) }
                    { !!dribbble && (<a className='social-media-icon' href={ dribbble } target='_blank'><FaDribbble /></a>  ) }
                </div>
            : 
                <div>
                    <Link to='/' className='button button--small'>Join Our Team</Link>
                </div>
        }
    </div>
); 

export default TeamTile;