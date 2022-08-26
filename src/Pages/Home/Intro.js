import React from 'react';

const Intro = () => {
    return (
        <div className='lg:grid grid-cols-2 lg:gap-10 mx-10 w-75 justify-evenly items-center my-14'>
            <div className='shrink  mx-auto'>
                <h2 className='text-6xl font-bold mb-14 text-primary hover:text-secondary'>Big Stock</h2>
                <h2 className='text-accent justify-center text-3xl font-bold'>We are here to give services to many big car manufacturing company to rent stock to them with good security and well maintaining support.</h2>
                <button className='btn bg-gradient-to-r from-primary  to-secondary text-white  mt-6 mb-6'>Explore Us!</button>
            </div>
            <div class="lg:w-mx-auto  carousel rounded-box mx-auto">
                <div class="carousel-item w-full  lg:flex lg:justify-end">
                    <img src="https://cdn1-blog.iseecars.com/wp-content/uploads/2021/03/car-sales-photo.jpeg" class="w-full mx-auto" alt="Tailwind CSS Carousel component" />
                </div>
            </div>
        </div>
    );
};

export default Intro;