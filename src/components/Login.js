import { Button } from '@mui/material'
import React from 'react'
import '../css/Login.css'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })        
        console.log(result)

      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/225px-2021_Facebook_icon.svg.png" alt="" />
        <img className="login_logoText" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/225px-Facebook_Logo_%282019%29.svg.png" alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login