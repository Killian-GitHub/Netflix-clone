import React, { useState, useEffect } from 'react'
import Logo from '../../logos/Netflix-logo.svg'
import Avatar from '../../logos/Netflix-avatar.png'
import './styles.css'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])


    return (
        <div className={`nav ${show && 'nav__black'}`}>

            <img
                className='nav__logo'
                src={Logo}
                alt='Netflix Logo'
            />

            <img
                className='nav__avatar'
                src={Avatar}
                alt='Netflix Avatar'
            />
        </div>
    )
}

export default Nav