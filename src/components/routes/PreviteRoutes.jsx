import React, { useContext } from 'react';
import { authProvider } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PreviteRoutes = ({children}) => {
    const location = useLocation()
    console.log(location);
    const {user,loading} = useContext(authProvider)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"state={{from:location}} replace></Navigate>
};

export default PreviteRoutes;