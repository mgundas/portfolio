import React from 'react';
import db from '../../database/database';

const Hero = () => {
    return (
        <div className='relative'>
            <div className='hero-container'>
                <div className='flex-2/4 grid gap-2'>
                    <h1 className='text-2xl text-indigo-300 font-light'>Hello! I am</h1>
                    <h1 className='text-2xl font-medium'>{db.profile.name}</h1>
                    <p className='text-2xl text-cyan-400 font-light'>{db.profile.title}</p>
                    <p className='text-2xl font-light'>{db.profile.description}</p>
                    <button className='get-resume-button'>Get my resume</button>
                </div>
                <div className='flex-1/4 p-6 flex items-center justify-center'>
                    <img src={db.profile.image} alt={db.profile.name} />
                </div>
            </div>
            <div className='hero-circle'></div>
        </div>
    );
}

export default Hero;
