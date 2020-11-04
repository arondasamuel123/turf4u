import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
            <nav>
                <ul>
                    <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add">
                            Create Turf
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/view">
                            View Turfs
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar
