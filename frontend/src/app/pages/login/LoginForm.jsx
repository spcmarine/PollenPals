import React, {useState} from "react";
import './LoginForm.css';

const LoginForm  = ({navigate, setSessionUser, sessionUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        let response = await fetch( 'http://localhost:8080/tokens', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password })
        })
    
        if(response.status !== 201) {
            navigate('/login')
        } else {
            let data = await response.json()
            window.localStorage.setItem("token", data.token)
            window.sessionStorage.setItem("sessionUser", email)
            window.sessionStorage.setItem("currentUser", data.username)
            console.log(data.username)
            navigate('/home')
        }
    }
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

        return (
        <div class="loginpage">
            <form onSubmit={handleSubmit}>
                <p>Email: </p>
                <input placeholder='Email' id='email' onChange={handleEmailChange}></input>
                <p>Password: </p>
                <input placeholder="Password" onChange={handlePasswordChange}></input>
                <input id='submit' type="submit" value="Submit" />
            </form>
        </div>
        )
    };

export default LoginForm;

//!Makers1234