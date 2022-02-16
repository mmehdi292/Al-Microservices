import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Profile from '../components/Profile'

export default function ProfileScreen() {
  return (
    <React.Fragment>
            <div className="container-scroller">
                <Header/>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Profile/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
  )
}
