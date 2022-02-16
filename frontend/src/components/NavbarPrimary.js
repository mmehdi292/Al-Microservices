import React, { Fragment } from 'react'

import { useNavigate, Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function NavbarPrimary() {
    const logoTextStyling = {
        color: '#00b894',
        'font-weight': 'bold'
    }
    const cookies = new Cookies()
    const Navigate = useNavigate()

    const logout = () =>{
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        Navigate('/')
    }

    const renderNav = () => {
        if (cookies.get('username')) {
            return <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="profileDropdown">
                    <span className="nav-profile-name">{cookies.get('username')}</span>

                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a onClick={()=>{logout()}} className="dropdown-item">
                        <i className="mdi mdi-logout text-primary"></i>
                        Logout
                    </a>
                </div>
            </li>
        }
        else {
            return <Fragment>
                <li className="nav-item dropdown  d-lg-flex d-none">
                <button type ="button" onClick={() => {Navigate('/login') }} className="btn btn-inverse-primary btn-sm">Login </button>
                </li>

                <li className="nav-item dropdown d-lg-flex d-none">
                <button type ="button" onClick={() => { Navigate('/register')}} className="btn btn-inverse-primary btn-sm">Register</button>
                </li>
            </Fragment>
        }
    }

    return (
        <nav className="navbar top-navbar col-lg-12 col-12 p-0">
            <div className="container-fluid">
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">

                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <h2 style={logoTextStyling}>AL Project</h2>
                    </div>

                    <ul className="navbar-nav navbar-nav-right">
                        {renderNav()}
                    </ul>



                </div>
            </div>
        </nav>
    )
}
