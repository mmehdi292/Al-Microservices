import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListVoyages from '../components/ListVoyages'

function VoyagesListScreen() {
    return (
        <React.Fragment>
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <ListVoyages />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default VoyagesListScreen