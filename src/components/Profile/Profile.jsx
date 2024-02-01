import React from 'react'
import malt from '../../asset/malt.png'
import github from '../../asset/github.svg'
import mail from '../../asset/mail.png'
import linkedin from '../../asset/linkedin.svg'
import './Profile.scss'

const Profile = () => {
    return (
        <div className="profile">
            <h2 className="profile__title">Player: Miliexe</h2>
            <span className="profile__description">FrontEnd React.js</span>
            <div className="profile__content">
                <h3>Développeuse</h3>
                <ul className="profile__section profile__section-row">
                    <li>Nom:</li>
                    <li>Leblanc</li>
                </ul>
                <ul className="profile__section profile__section-row">
                    <li>Prénom:</li>
                    <li>Émilie</li>
                </ul>
                <ul className="profile__section profile__section-row">
                    <li>Âge:</li>
                    <li>23 ans</li>
                </ul>
            </div>
            <div className="profile__content">
                <h3>Objecifs</h3>
                <ul className="profile__section profile__section-column ">
                    <li>Créer des expériences web mémorables</li>
                    <li>Transformer vos idées en réalité</li>
                </ul>
            </div>
            {/* <div className="extend">
                <a href="/#profile" rel="noreferrer">
                    Voir +
                </a>
            </div> */}
            <ul className="profile__section profile__section-row links">
                <li>
                    <a
                        href="https://www.malt.fr/profile/emilieleblanc"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <img src={malt} alt="Malt Logo" />
                    </a>
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
    )
}

export default Profile
