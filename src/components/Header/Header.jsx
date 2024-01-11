import React from 'react'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'
import './Header.scss'

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
