import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function NavbarSecond() {
    const cookies = new Cookies()

  return (
    <nav className="bottom-navbar">
                    <div className="container">
                        <ul className="nav page-navigation">
                            
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    <i className="mdi mdi-bus menu-icon"></i>
                                    <span className="menu-title">Voyages</span>
                                </Link>
                            </li>
                            
                        {cookies.get('username')?
                        <Fragment>
                            <li className="nav-item">
                                <Link to="/historique" className="nav-link">
                                    <i className="mdi mdi-calendar menu-icon"></i>
                                    <span className="menu-title">Historique</span>
                                    <i className="menu-arrow"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">
                                    <i className="mdi mdi-face-profile menu-icon"></i>
                                    <span className="menu-title">Profile</span>
                                    <i className="menu-arrow"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">
                                    <i className="mdi mdi-table-edit menu-icon"></i>
                                    <span className="menu-title">Modifier Profile</span>
                                    <i className="menu-arrow"></i>
                                </Link>
                            </li>
                            </Fragment>
                            :null
                            }

                        </ul>
                    </div>
                </nav>
  )
}
