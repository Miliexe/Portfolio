import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Error404 from './pages/Error404/Error404'

const index = () => {
    return (
        <Router>
            <Header />
            <div className="route">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}

export default index
