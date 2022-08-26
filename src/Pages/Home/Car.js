import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Car = ({ car }) => {
    const { id, img, name, year, price, color, stock } = car;
    const navigate = useNavigate();
    // const [instrument, setInstrument] = useState([]);
    // useEffect(() => {
    //     fetch(`cars.json`)
    //         .then(res => res.json())
    //         .then(data => setInstrument(data));
    // }, [instrument])

    const newPath = (id) => {
        navigate(`/car/${id}`);
    }
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



                <button onClick={() => newPath(car._id)} className='btn bg-gradient-to-r from-primary  to-secondary text-white font-xl px-16 '>Update</button>


            </div>

        </div>
    );
};

export default Car;