import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Kasa from './pages/Kasa'
import Piiquante from './pages/Piiquante'
import Kanap from './pages/Kanap'
import Panthere from './pages/Panthere'
import Ohmyfood from './pages/Ohmyfood'
import Booki from './pages/Booki'
import Error404 from './pages/Error404'

const index = () => {
    return (
        <Router>
            <Header />
            <div className="route">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/Kasa" element={<Kasa />} />
                    {/* <Route path="/project/Piiquante" element={<Piiquante />} />
                    <Route path="/project/Kanap" element={<Kanap />} />
                    <Route path="/project/La-Panthere" element={<Panthere />} /> */}
                    {/* <Route path="/project/Ohmyfood" element={<Ohmyfood />} /> */}
                    {/* <Route path="/project/Booki" element={<Booki />} /> */}
                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}

export default index
