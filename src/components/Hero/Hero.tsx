import React from 'react';

const Hero = () => {
    return (
        <div className='relative'>
            <div className='hero-container'>
                <div className='flex-2/4 grid gap-2'>
                    <h1 className='text-2xl text-indigo-300 font-light'>Hello! I am</h1>
                    <h1 className='text-2xl font-medium'>Mehmet Gündaş</h1>
                    <p className='text-2xl text-cyan-400 font-light'>Software Developer</p>
                    <p className='text-2xl font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, soluta necessitatibus laboriosam quae possimus aliquid iste? Dolor minima impedit, tenetur veniam, veritatis voluptatum eius iusto eaque dolores ipsam eum repudiandae!</p>
                    <button className='get-resume-button'>Get my resume</button>
                </div>
                <div className='flex-1/4 p-6 flex items-center justify-center'>
                    <img src='https://placehold.co/300' alt='Mehmet Gundas' />
                </div>
            </div>
            <div className='hero-circle'></div>
        </div>
    );
}

export default Hero;
