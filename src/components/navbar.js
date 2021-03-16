import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Navbar = ({ currentUser }) => {

    const history = useHistory();
    if (!currentUser) {
        history.push("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                {!currentUser && (<>
                    <NavLink className="nav-item nav-link" to="/login">
                        Login
                 </NavLink>
                    <NavLink className="nav-item nav-link" to="/register">
                        Register
                </NavLink>
                </>)}

                {currentUser && (<>
                    <NavLink className="nav-item nav-link" to="/rental">
                        Rentals
                </NavLink>
                </>)}


            </div>
        </nav>

    )
}

export default Navbar;