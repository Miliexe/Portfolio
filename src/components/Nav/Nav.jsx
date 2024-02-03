import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'
import Menu from '../Menu/Menu'

const Nav = () => {
    const [stateCollapse, setStateCollapse] = useState(0)
    const stateCollapseUpdate = () => {
        setStateCollapse(!stateCollapse)
    }
    return (
        <div className="nav-container">
            <div className="nav">
                <ul>
                    <NavLink
                        to="/"
                        className={(nav) => (nav.isActive ? 'nav--active' : '')}
                        onClick={() =>
                            stateCollapse ? stateCollapseUpdate : null
                        }
                    >
                        {/* <li>Accueil</li> */}
                    </NavLink>
                </ul>
            </div>
            {/* <Menu></Menu> */}
        </div>
    )
}

export default Nav
