import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = ({ children }) => {
    const { user, isLoading } = useAuth()
    const location = useLocation()

    if (isLoading) {
        return;
    }

    if (!user.email) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
}

export default RequireAuth;