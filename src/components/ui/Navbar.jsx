import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { Nav, Navbar } from 'react-bootstrap'

export const Navbar2 = () => {
    const { user, dispatch } = useContext( AuthContext );
    const navigate = useNavigate();
    const handleLogout = () => {
        // const action = {
        //     type: types.logout,
        //     payload: { logout: false }
        // }
        // dispatch( action );
        // navigate( '/Login', {
        //     replace: true
        // });
        dispatch( { type: types.logout } );
        navigate( '/Login', {
            replace: true
        });
    };

    return (
        // <nav className="navbar fixed-top navbar-expand-sm navbar-blue bg-dark">
        // <div className="navbar-collapse">
        // <div className="navbar-nav">
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark' >
            <NavLink 
                className={ ( { isActive } ) => 'nav-item nav-link' + ( isActive ? ' active ' : '' ) }
                to=""
            >
                Héroes
            </NavLink>
            <Navbar.Toggle aria-controls='respomsive-navbar-nav' />
            <Navbar.Collapse>
                <Nav>
                    <NavLink 
                        className={ ( { isActive } ) => 'nav-item nav-link' + ( isActive ? ' active ' : '' ) }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ( { isActive } ) => 'nav-item nav-link' + ( isActive ? ' active ' : '' ) }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ( { isActive } ) => 'nav-item nav-link' + ( isActive ? ' active ' : '' ) }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
            <span className="text-info" >
                { user.name }
            </span>
            <button
                className="nav-item nav-link btn"
                onClick={ handleLogout }
                >
                    Logout
            </button>
        </Navbar>
    )
}