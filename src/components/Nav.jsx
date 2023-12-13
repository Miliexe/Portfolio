import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
                            stateCollapse
                                ? setStateCollapse(!stateCollapse)
                                : null
                        }
                    >
                        <li>Accueil</li>
                    </NavLink>
                </ul>
            </div>
            <div className="menu">
                <Hamburger
                    toggled={stateCollapse}
                    toggle={stateCollapseUpdate}
                />
                {stateCollapse ? (
                    <div className="menu--open">
                        <div className="menu__body">
                            <div className="menu__content">
                                <span>Mes réalisations:</span>
                                <ul>
                                    {/* <NavLink
                                        to="/project/Kasa"
                                        className={(nav) =>
                                            nav.isActive ? 'menu--active' : ''
                                        }
                                        onClick={() =>
                                            setStateCollapse(!stateCollapse)
                                        }
                                    >
                                        <li>Kasa</li>
                                    </NavLink>
                                    <NavLink
                                        to="/project/Piiquante"
                                        className={(nav) =>
                                            nav.isActive ? 'menu--active' : ''
                                        }
                                        onClick={() =>
                                            setStateCollapse(!stateCollapse)
                                        }
                                    >
                                        <li>Piiquante</li>
                                    </NavLink>
                                    <NavLink
                                        to="/project/Kanap"
                                        className={(nav) =>
                                            nav.isActive ? 'menu--active' : ''
                                        }
                                        onClick={() =>
                                            setStateCollapse(!stateCollapse)
                                        }
                                    >
                                        <li>Kanap</li>
                                    </NavLink>
                                    <NavLink
                                        to="/project/La-Panthere"
                                        className={(nav) =>
                                            nav.isActive ? 'menu--active' : ''
                                        }
                                        onClick={() =>
                                            setStateCollapse(!stateCollapse)
                                        }
                                    >
                                        <li>La Panthère</li>
                                    </NavLink> */}
                                    <a
                                        href="https://ohmyfood-lake.vercel.app/"
                                        target="_BLANK"
                                        className={(nav) =>
                                            nav.isActive ? 'menu--active' : ''
                                        }
                                        onClick={() =>
                                            setStateCollapse(!stateCollapse)
                                        }
                                    >
                                        <li>Ohmyfood</li>
                                    </a>
                                    {/* <NavLink
                                        to="/project/Booki"
                                        className={(nav) =>
                                            nav.isActive ? 'menu--active' : ''
                                        }
                                        onClick={() =>
                                            setStateCollapse(!stateCollapse)
                                        }
                                    >
                                        <li>Booki</li>
                                    </NavLink> */}
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
        </div>
    )
}

export default Nav
