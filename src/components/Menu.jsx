import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    const [stateCollapse, setStateCollapse] = useState(0)
    const stateCollapseUpdate = () => {
        setStateCollapse(!stateCollapse)
    }
    return (
        <div className="menu">
            <Hamburger
                onToggle={() => {
                    stateCollapseUpdate()
                }}
            />
            {stateCollapse ? (
                <div className="menu--open">
                    <div className="menu__body"></div>
                    <div className="menu__content">
                        <span>Mes réalisations:</span>
                        <ul>
                            <NavLink
                                to="/project/Kasa"
                                className={(nav) =>
                                    nav.isActive ? 'menu--active' : ''
                                }
                            >
                                <li>Kasa</li>
                            </NavLink>
                            <NavLink
                                to="/project/Piiquante"
                                className={(nav) =>
                                    nav.isActive ? 'menu--active' : ''
                                }
                            >
                                <li>Piiquante</li>
                            </NavLink>
                            <NavLink
                                to="/project/Kanap"
                                className={(nav) =>
                                    nav.isActive ? 'menu--active' : ''
                                }
                            >
                                <li>Kanap</li>
                            </NavLink>
                            <NavLink
                                to="/project/La-Panthere"
                                className={(nav) =>
                                    nav.isActive ? 'menu--active' : ''
                                }
                            >
                                <li>La Panthère</li>
                            </NavLink>
                            <NavLink
                                to="/project/Ohmyfood"
                                className={(nav) =>
                                    nav.isActive ? 'menu--active' : ''
                                }
                            >
                                <li>Ohmyfood</li>
                            </NavLink>
                            <NavLink
                                to="/project/Booki"
                                className={(nav) =>
                                    nav.isActive ? 'menu--active' : ''
                                }
                            >
                                <li>Booki</li>
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink
                                to="/Error404"
                                className={(nav) =>
                                    nav.isActive ? 'menu--active' : ''
                                }
                            >
                                <br />
                                <li>404 Not Found</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Menu
