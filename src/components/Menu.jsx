import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

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
                            <li>
                                <a href="/project/Kasa" rel="noreferrer">
                                    Kasa
                                </a>
                            </li>
                            <li>
                                <a href="/project/Piiquante" rel="noreferrer">
                                    Piiquante
                                </a>
                            </li>
                            <li>
                                <a href="/project/Kanap" rel="noreferrer">
                                    Kanap
                                </a>
                            </li>
                            <li>
                                <a href="/project/La-Panthere" rel="noreferrer">
                                    La Panthère
                                </a>
                            </li>
                            <li>
                                <a href="/project/Ohmyfood" rel="noreferrer">
                                    Ohmyfood
                                </a>
                            </li>
                            <li>
                                <a href="/project/Booki" rel="noreferrer">
                                    Booki
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Menu
