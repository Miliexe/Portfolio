import React from 'react'
import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
    return (
        <div className="header">
            <Nav></Nav>
            
            <div className="header__title">
            <Logo></Logo>
            </div>
        </div>
    )
}

export default Header
