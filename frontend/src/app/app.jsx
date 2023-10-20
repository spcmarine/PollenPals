import React, { useState } from 'react';
import './app.css';
import LoginForm from './pages/login/LoginForm';
import SignupForm from './pages/signup/signup';
import Listings from './pages/Listings/listings.jsx'
import Homepage from './pages/Homepage/Homepage'

import {
    useNavigate,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage navigate={ useNavigate()}/>}></Route>
            <Route path='/login'  element={<LoginForm  navigate={ useNavigate() } />}/>
            <Route path='/signup' element={<SignupForm navigate={ useNavigate() } /> }/>
            <Route path='/listings' element={<Listings navigate={ useNavigate() } /> }/>
        </Routes>
    )
}

export default App;