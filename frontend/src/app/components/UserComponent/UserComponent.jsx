import React, {useState, useCallback, useEffect} from 'react';
import styles from './UserComponent.module.css';

const UserComponent = ({token, setToken}) => {
    const [email, setEmail] = useState(sessionStorage.getItem('sessionUser') || '');
    const [firstName, setFirstName] = useState(sessionStorage.getItem('currentFirstName') || '');
    const[profileImage, setProfileImage] = useState('');

   /* 
   Can access user details from the session storage so do not have to do a fetch to backend to get user details*/
   const fetchUserDetails = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:8080/users?email=${encodeURIComponent(email)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        });

        const data = await response.json();

        if (data.token) {
            window.localStorage.setItem('token', data.token);
            setToken(data.token);
        }

        if (data.imageUrl) {
            setProfileImage(data.imageUrl);
        }


    } catch (error) {         
    
        console.error("Error fetching user name:", error);
    
}}, [token, setToken, email]);
    
useEffect(() => {
    fetchUserDetails();
}, [token, fetchUserDetails]);
    
    
    return (
        <div className={styles.userComponent}>
        <p>UserComponent</p>
        <p>Hello {firstName}</p>
        <img src={profileImage} alt="profileImage" />
        </div>
)}


export default UserComponent;