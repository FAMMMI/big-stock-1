import React, { useEffect, useState } from 'react';
import Car from './Car';
const Cars = () => {
    // const [course, setCourse] = useState(null);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/car`)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div>
            <h1 className='font-bold text-primary text-4xl text-center'>Inventory</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10 my-10'>
                {
                    cars?.map(car => <Car
                        key={car.id}
                        car={car}

                    >

                    </Car>)
                }
            </div>
            <div className='text-center'>
                <button className='btn my-6 bg-gradient-to-r from-primary  to-secondary text-white'>Add Product</button>
            </div>

        </div>
    );
};

export default Cars;