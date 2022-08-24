import React, { useRef } from 'react';
// import { Button, Card, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from '../Login/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/home";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        switch (error?.code) {
            case "auth/wrong-email":
                errorElement = <p className='text-danger'>Give a valid email!</p>
                break;

            case "auth/wrong-password":
                errorElement = <p className='text-danger'>Wrong Password</p>
                break;
            default:
                errorElement = <p className='text-danger'>Something went wrong.</p>
        }

    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (

        <div class="card lg:max-w-lg bg-base-100 shadow-xl my-10 mx-auto">
            <div class="container-login">


                <form onSubmit={handleSubmit} class="card-body items-center text-center">
                    <h2 class="card-title text-4xl text-secondary">Login</h2>
                    <div className="input-group mb-0 w-75 mx-auto form-control">
                        <label htmlFor='email' className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input className='input input-bordered w-100 ' ref={emailRef} type="email" name="email" id='email' required />
                    </div>
                    <div className="input-group w-75 mx-auto form-control">
                        <label htmlFor='password' className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input ref={passwordRef} className='input input-bordered w-100 ' type="password" name="password" id='password' />
                    </div>

                    <div className='d-block '>
                        <input className='btn btn-secondary w-100 mx-4 text-white' type="submit" required value="Login" />
                        <button className='btn btn-secondary w-100 text-white' onClick={resetPassword}>Reset Password</button>
                    </div>

                </form>
                {errorElement}
                <p className='my-3 fs-5 text-center'>
                    New User? <Link className='form-link' to='/signup'><span className='text-secondary font-bold'>Sign Up</span></Link>
                </p>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div >
    );
};

export default Login;