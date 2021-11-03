import React, { useState, useEffect } from 'react'
import Logo from '../../logos/Netflix-logo.svg'
import Avatar from '../../logos/Netflix-avatar.png'
import './styles.css'
import { useHistory } from 'react-router'

function Nav() {
  const [show, handleShow] = useState(false)
  const history = useHistory()

  const transitionNavBar = () =>
    window.scrollY > 100 ? handleShow(true) : handleShow(false)

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => {
      window.removeEventListener('scroll', transitionNavBar)
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        onClick={() => history.push('/')}
        className="nav__logo"
        src={Logo}
        alt="Netflix Logo"
      />

      <img
        onClick={() => history.push('/profile')}
        className="nav__avatar"
        src={Avatar}
        alt="Netflix Avatar"
      />
    </div>
  )
}

export default Nav
