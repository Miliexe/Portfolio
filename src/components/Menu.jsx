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
                                <a
                                    href="https://github.com/Miliexe/Kasa#readme"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    Kasa
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Miliexe/Piiquante#readme"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    Piiquante
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Miliexe/Kanap#readme"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    Kanap
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Miliexe/Panthere_after#readme"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    La Panthère
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Miliexe/Ohmyfood#readme"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    Ohmyfood
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Miliexe/Booki#readme"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
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
