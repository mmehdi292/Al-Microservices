import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HistoriqueVoyages from '../components/HistoriqueVoyages'

export default function HistoriqueVoyagesScreen() {
    return (
        <React.Fragment>
            <div className="container-scroller">
                <Header/>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <HistoriqueVoyages/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
