import React from 'react'
import Menu from './Menu'
import Nav from './Nav'

const Header = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <Menu></Menu>
        </div>
    )
}

export default Header
