import React, { useRef } from 'react'
import { auth } from '../../firebase'
import './styles.css'

function SignIn() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(
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
    <div className="signin">
      <form>
        <h1>S'inscrire</h1>
        <input
          ref={emailRef}
          placeholder="E-mail ou numéro de téléphone"
          type="email"
        />
        <input ref={passwordRef} placeholder="Mot de passe" type="password" />
        <button type="submit" onClick={register}>
          S'inscrire
        </button>
      </form>
    </div>
  )
}

export default SignIn
