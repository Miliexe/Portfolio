import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

const Menu = () => {
    const [stateCollapse, setStateCollapse] = useState(0)
    const stateCollapseUpdate = () => {
        setStateCollapse(!stateCollapse)
    }
    return (
        <div className="menu">
            <Hamburger toggled={stateCollapse} toggle={stateCollapseUpdate} />
            {stateCollapse ? (
                <div className="menu--open">
                    <div className="menu__body">
                        <div className="menu__content">
                            <span>Mes réalisations:</span>
                            <ul>
                                <a
                                    href="https://ohmyfood-lake.vercel.app/"
                                    target="_BLANK"
                                    rel="noreferrer"
                                >
                                    <li>Ohmyfood</li>
                                </a>
                            </ul>
                            <ul>
                                <NavLink
                                    to="/Error404"
                                    className={(nav) =>
                                        nav.isActive ? 'menu--active' : ''
                                    }
                                    onClick={() =>
                                        setStateCollapse(!stateCollapse)
                                    }
                                >
                                    <br />
                                    <li>Coming soon...</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Menu
