import React, { useState } from 'react'
import './styles.css'
import Logo from '../../logos/Netflix-logo.svg'
import SignUp from '../../components/SignUp'

function LoginScreen() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="login">
      <div className="login__background">
        <img className="login__logo" src={Logo} alt="Netflix Logo" />

        <button onClick={() => setSignIn(true)} className="login__btn">
          S'identifier
        </button>

        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Films, séries TV et bien plus en illimité.</h1>
            <h2>Où que vous soyez. Annulez à tout moment.</h2>
            <h3>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </h3>
            <div className="login__input">
              <form>
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="login__inputInpt"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__inputBtn"
                >
                  Commencer
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginScreen
