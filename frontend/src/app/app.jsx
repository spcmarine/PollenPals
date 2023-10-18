import React, { useState } from 'react';
import './app.css';
import LoginForm from './pages/login/LoginForm';
import SignupForm from './pages/signup/Signup';
import {
    useNavigate,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path='/login'  element={<LoginForm  navigate={ useNavigate() } />}/>
            <Route path='/signup' element={<SignupForm navigate={ useNavigate() } /> }/>
        </Routes>
    )
}

export default App;