import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import useAuth from '../hooks/useAuth'
import app from '../firebase'

const Login = () => {
    const auth = getAuth(app);
    const { handleGoogleSignIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const googleSignIn = () => [
        handleGoogleSignIn()
            .then(result => {
                navigate(location.state?.from || '/')
            })
    ]

    const emailFieldHandler = e => {
        setEmail(e.target.value);
    }

    const passwordFieldHandler = e => {
        setPassword(e.target.value);
    }

    const formHandler = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // redirect user login page or existing page 
                if (user) {
                    navigate(location.state?.from || '/')
                }
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }



    return (
        <div className='h-screen'>
            <div className='px-6 py-12 h-full'>
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-4/12 mb-12 md:mb-0">
                        <h2 className='text-center text-3xl font-bold mb-5'>Welcome back! Please Login</h2>

                        <form onSubmit={formHandler}>
                            <div className="mb-6">
                                <input onBlur={emailFieldHandler}
                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                /></div>

                            <div className="mb-6">
                                <input onBlur={passwordFieldHandler}
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light">
                                Sign in
                            </button>
                        </form>

                        <p className='text-center mt-4'>Don't have an account? <Link to='/register' className='font-bold'>Register</Link></p>

                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <p className="text-center font-semibold mx-4 mb-0">OR</p>
                        </div>

                        <button onClick={googleSignIn} className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                            style={{ backgroundColor: '#3b5998' }}>
                            <FontAwesomeIcon icon={faGoogle} className='mr-2' /> Continue with Google
                        </button>
                        <Link
                            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                            style={{ backgroundColor: '#55acee' }}
                            to="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light">
                            <FontAwesomeIcon icon={faFacebook} className='mr-2' /> Continue with Facebook
                        </Link>
                        {/* </form> */}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login