import React from 'react';

const Car = ({ car }) => {
    const { id, img, name, year, price, color, stock } = car;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 h-full">
                <img src={img} alt="Shoes" class="rounded-xl w-250px h-50px" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold">{name}</h2>
                <p className='font-bold'>Price: ${price}</p>
                <p className='px-10'>Color: {color}</p>
                <p className='px-10'>Year: {year}</p>
                <p className='px-10'>Stock: {stock}</p>



                <button className='btn btn-secondary text-white font-xl'>Edit </button>


            </div>

        </div>
    );
};

export default Car;