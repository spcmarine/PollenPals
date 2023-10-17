import React, {useState} from "react";

const LoginForm  = ({navigate}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const handleResponse = (error, data) => {
            if (error) {
                navigate('/login');
            } else {
                window.localStorage.setItem('token', data.token);
                window.sessionStorage.setItem('sessionUser', email);
                window.sessionStorage.setItem('currentUser', data.username);
            }
        }

        fetch('/tokens', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => {
            if (response.status !== 201) {
                handleResponse(new Error('Login failed'), null);
            } else {
                response.json().then(data => handleResponse(null, data));
            }
        });

        return (
        <div>
            <form>
                <p>Email: </p>
                <input>Text</input>
                <p>Password: </p>
            </form>
        </div>
        )
    };
};

export default LoginForm;