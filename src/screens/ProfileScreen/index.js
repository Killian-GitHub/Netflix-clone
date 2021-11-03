import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Nav from '../../components/Nav'
import Avatar from '../../logos/Netflix-avatar.png'
import './styles.css'

function ProfileScreen() {
  const user = useSelector(selectUser)

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Profil</h1>
        <div className="profile__info">
          <img src={Avatar} alt="Netflix Avatar" />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
