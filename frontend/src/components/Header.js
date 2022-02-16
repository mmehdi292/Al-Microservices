import React from 'react'
import NavbarPrimary from './NavbarPrimary'
import NavbarSecond from './NavbarSecond'

const Header = () => {
    
    return (
        <div className="container-scroller">
            <div className="horizontal-menu">
                <NavbarPrimary/>
                <NavbarSecond/>
            </div>
        </div>
    )
}

export default Header
