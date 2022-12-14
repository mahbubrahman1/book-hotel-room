import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const Header = () => {
    const { user, handleSignOut } = useAuth();

    return (
        <nav className='flex flex-row justify-center space-x-6 text-xl'>
            <Link to='/'>Home</Link>
            <Link to='/rooms'>Rooms</Link>
            <Link to='/book'>My Book</Link>
            {
                user.email ?
                    <button onClick={handleSignOut} className="text-red-500">Logout</button>
                    :
                    <Link to='/login'>Login</Link>
            }
        </nav>
    )
}

export default Header