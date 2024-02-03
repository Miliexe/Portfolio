import React from 'react'
import Avatar from '../../components/Avatar/Avatar.jsx'
import Profile from '../../components/Profile/Profile.jsx'
import './Home.scss'

const Home = () => {
    return (
        <div className="home">
            <Avatar></Avatar>
            {/* <Profile></Profile> */}
            <div className="maintenance">
                <p>Une maintenance est en cours...</p>
            </div>
        </div>
    )
}

export default Home
