import React, {useState} from "react";
import './LoginForm.css';

const LoginForm  = ({navigate}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        let response = await fetch( '/tokens', {
            method: 'post',
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
            <form>
                <p>Email: </p>
                <input placeholder='Email' id='email' type='text' value={ email }></input>
                <p>Password: </p>
                <input placeholder="Password"></input>
                <button>Submit</button>
            </form>
        </div>
        )
    };

export default LoginForm;