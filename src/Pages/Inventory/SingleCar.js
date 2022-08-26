import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AllFunctions from '../../Hooks/AllFunctions';

const SingleCar = () => {
    const { id } = useParams();


    const [car, setCar] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/car/${id}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [car])

    const { img, name, year, Supplier, price, color, stock } = car;
    const [DecreaseByOne, IncreaseByOne, DeleteByOne] = AllFunctions();
    const EventSubmit = event => {
        event.preventDefault();
        const number = parseInt(event.target.number.value);
        console.log(typeof number, typeof car.stock);
        IncreaseByOne(car, number);
        event.target.reset();
    }
    return (
        <div className='text-center '>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl my-10 mx-auto">
                <figure class="px-10 pt-10">
                    <img src={img} alt="car" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-center fs-5'>{year}</p>
                    <h5 className='text-center'>Color: <span className='item-span'>{color}</span></h5>
                    <h5 className='text-center'>Price<span className='item-span'>{price}</span></h5>
                    <h5 className='text-center'>Supplier Name: <span className='item-span'>{Supplier}</span></h5>
                    <h5 className='text-center'>Quantity: <span className='item-span'>{stock}</span></h5>
                    <div class="card-actions">
                        <button onClick={() => DecreaseByOne(car)} class="btn btn-primary">Delivered</button>
                    </div>
                </div>
            </div>

            <div className='card lg:max-w-lg bg-base-100 shadow-xl my-10 mx-auto'>
                <div>
                    <h2 className='text-xl text-secondary font-bold mb-5 text-center'>Restock Inventory</h2>

                    <form className='mx-auto place-content-around grid grid-cols-2 gap-10 text-center' onSubmit={EventSubmit}>
                        <div class="form-control text-center mx-auto">
                            <label className='input-group input-group-md' htmlFor='number'>
                                <span>Restock</span>
                                <input type="number" name="number" required class="input input-bordered input-md" />
                            </label>
                        </div>
                        <input className='btn  form-submit w-25' type="submit" required value="Restock" />
                    </form>


                </div>
            </div>

        </div>
    );
};

export default SingleCar;