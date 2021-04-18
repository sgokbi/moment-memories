import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from "../../../images/google.png";
import "./Login.css";
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(signedInUser);
            }).catch((error) => {
                var email = error.email;

            });
    }

    return (
        <div className="login-div">
            <button className="google-btn" onClick={handleGoogleSignIn} >
                <img className="google-img" src={google} alt="" /> Sign In With Google</button>
        </div>
    );
};

export default Login;