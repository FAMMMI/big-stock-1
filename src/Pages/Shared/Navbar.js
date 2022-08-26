import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItem = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/aboutus" > About Us</Link></li>

        <li><Link to="/services"> Our Services</Link></li>

        <li>{user ? <button onClick={logout}>Sign Out</button> : <Link to="/login" >Login</Link>}</li>
        {user ? <p className='mt-3 ml-2'>{user?.displayName}</p> : ''}

    </>
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>

                    </div>
                    <Link to='/' class=" btn bg-gradient-to-r from-primary via-secondary to-primary px-10 normal-case text-white lg:text-3xl sm:font-bold text-white  ml-16 mr-10">BIG STOCK</Link>

                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbar;