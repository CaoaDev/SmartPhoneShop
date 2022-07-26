import { useContext } from "react";
import React from 'react';
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

export const PublickRoute = ( { children } = {} ) => {
    const { user } = useContext( AuthContext );
    
    return user.logged
        ? <Navigate to='/' />

        : children
}