import React from 'react'
import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'

const Header = () => {
    const { user, handleSignOut } = useFirebase();

    return (
        <nav className='flex flex-row justify-center space-x-6 text-xl'>
            <Link to='/'>Home</Link>
            <Link to='/rooms'>Rooms</Link>
            <Link to='/book'>My Book</Link>
            {/* {user.email && <span>{user.displayName}</span>} */}
            {
                user.email ?
                    <button onClick={handleSignOut}>Logout</button>
                    :
                    <Link to='/login'>Login</Link>
            }
        </nav>
    )
}

export default Header