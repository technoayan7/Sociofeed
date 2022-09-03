import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { actionTypes } from './Reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        // sign In
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user);
            }).catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://github.com/technoayan7/GDS/blob/main/Group%202.png?raw=true" alt="" />
                {/* <img src="https://github.com/technoayan7/GDS/blob/main/Group%201.png?raw=true" alt=""/> */}
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In With Google
            </Button>
        </div>
    )
}

export default Login
