import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Nav from './Nav'

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
            {stateCollapse ? <div className="menu--open"></div> : null}
        </div>
    )
}

export default Menu
