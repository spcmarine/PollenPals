import React, {useState} from "react";
import styles from './LoginForm.module.css';
import SignedOutNavbar from '../../components/SignedOutNavbar/SignedOutNavbar'

const LoginForm  = ({navigate, setSessionUser, sessionUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        let response = await fetch( 'http://localhost:8080/tokens', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password })
        })

        if(response.status === 201) {
            let data = await response.json()
            window.localStorage.setItem("token", data.token)
            window.sessionStorage.setItem("userID",data.UserID )
            window.sessionStorage.setItem("userEmail", email)
            window.sessionStorage.setItem("username", data.username)
            window.sessionStorage.setItem("currentFirstName", data.firstName)
            navigate('/users')
        } else if (response.status === 402){
            setErrorMessage("Incorrect Password")
            navigate('/login')
        } else if (response.status === 401){
            setErrorMessage("Incorrect Email")
            navigate('/login')
        } else {
            setErrorMessage("Something went wrong, please try again later")
            navigate('/login')
        }
    }
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

        return (
        <div className={styles.pageWithNav}>
            <SignedOutNavbar className={styles.signedOutNavbar}></SignedOutNavbar>
            <div className={styles.fullPage}>
                <div className={styles.leftMargin}/>
                <div className={styles.loginFormArea}>
                    <h2 className={styles.loginHeader}>Sign in</h2>
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <input placeholder='Email' id='email' className={styles.email} onChange={handleEmailChange}></input>
                        <input placeholder="Password" id='password' className={styles.password} type='password' onChange={handlePasswordChange}></input>
                        <input id='submit' type="submit" className={styles.submit} value="Submit" />
                        <div id='login-error-message' className={styles.errorMessage}>{errorMessage}</div>
                    </form>
                    <div id='signup-login' className={styles.signup}>Need an account? <a id='login-signup-link' className={styles.signupLink} href='/signup'>Sign up</a></div>
                </div>
                <img id='signup-picture' className={styles.loginPicture} src="/LoginPic.png"></img>
                <div className={styles.rightMargin}/>
            </div>
        </div>
        )
    };

export default LoginForm;
