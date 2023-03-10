import React from 'react'
import Avatar from '../components/Avatar'
import Profile from '../components/Profile'

const Home = () => {
    return (
        <div className="home">
            <div className="avatar-container">
                <Avatar></Avatar>
            </div>
            <Profile></Profile>
        </div>
    )
}

export default Home
