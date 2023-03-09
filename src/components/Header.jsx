import React from 'react'
import Menu from './Menu'
import Nav from './Nav'

const Header = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <div className="header__title">
                <h1>Émilie Leblanc</h1>
            </div>
            <Menu></Menu>
        </div>
    )
}

export default Header
