import React from 'react';
import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <section className="bg-banner bg-no-repeat bg-center bg-cover">
            <div className="container">
                <div className='w-full lg:w-1/2 ml-auto space-y-5 py-10 md:py-24 lg:py-36 xl:py-64'>
                    <div className='space-y-3'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-rancho font-semibold text-white'>Would you like a Cup of Delicious Coffee?</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad consequuntur fugiat odio rerum, quo illum! Doloribus ea dolorem illum ratione.</p>
                    </div>
                    <button className="btn--filled">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;