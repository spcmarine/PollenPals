import React, { useState } from 'react';
import LoginForm from './pages/login/login';
import {
    useNavigate,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path='/login'  element={<LoginForm  navigate={ useNavigate() } />}/>
        </Routes>
    )
}

export default App;