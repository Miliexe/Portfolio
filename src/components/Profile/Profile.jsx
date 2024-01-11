import React from 'react'
import github from '../../asset/github.svg'
import mail from '../../asset/mail.png'
import linkedin from '../../asset/linkedin.svg'
import './Profile.scss'

const Profile = () => {
    return (
        <div className="profile">
            <h2 className="profile__title">Player: Miliexe</h2>
            <span className="profile__description">Web Developer</span>
            <div className="profile__content">
                <ul className="profile__section">
                    <h3>Skills:</h3>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>HTML5</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
                <ul className="profile__section">
                    <h3>Level:</h3>
                    <li>Bac+2</li>
                </ul>
                <ul className="profile__section flex-end">
                    <li>
                        <a
                            href="https://github.com/Miliexe"
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            <img src={github} alt="GitHub Logo" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/leblanc-emilie/"
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            <img src={linkedin} alt="Linkedin Logo" />
                        </a>
                        <a href="mailto:emilie.lblc@gmail.com">
                            <img src={mail} alt="Email Logo" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
