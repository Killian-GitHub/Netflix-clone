import React, { useRef, useState } from 'react'
import { auth } from '../../firebase'
import SignIn from '../SignIn'
import './styles.css'

function SignUp() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [register, setRegister] = useState(false)

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <>
      {register ? (
        <SignIn />
      ) : (
        <div className="signup">
          <form>
            <h1>S'identifier</h1>
            <input
              ref={emailRef}
              placeholder="E-mail ou numéro de téléphone"
              type="email"
            />
            <input
              ref={passwordRef}
              placeholder="Mot de passe"
              type="password"
            />
            <button type="submit" onClick={signIn}>
              S'identifier
            </button>
            <h4>
              <span className="signup__gray">
                Première visite sur Netflix ?{' '}
              </span>
              <span className="signup__link" onClick={() => setRegister(true)}>
                Inscrivez-vous.
              </span>
            </h4>
          </form>
        </div>
      )}
    </>
  )
}

export default SignUp
