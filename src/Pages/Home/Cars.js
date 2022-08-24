import React, { useEffect, useState } from 'react';
import Car from './Car';
const Cars = () => {
    // const [course, setCourse] = useState(null);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(`cars.json`)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div>
            <h1 className='font-bold text-secondary text-4xl text-center'>Our Courses</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10 my-10'>
                {
                    cars?.map(car => <Car
                        key={car.id}
                        car={car}

                    >

                    </Car>)
                }
            </div>

        </div>
    );
};

export default Cars;