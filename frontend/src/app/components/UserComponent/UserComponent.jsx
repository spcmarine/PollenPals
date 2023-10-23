import React, {useState, useCallback, useEffect} from 'react';
import styles from './UserComponent.module.css';
import ProfileImageUploader from '../ProfileImageUploader/ProfileImageUploader';

const UserComponent = ({token, setToken}) => {
    const [email, setEmail] = useState(sessionStorage.getItem('userEmail') || '');
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
            console.log("data.imageUrl: ", data.imageUrl);
            setProfileImage(data.imageUrl);
        }


    } catch (error) {         
    
        console.error("Error fetching user name:", error);
    
}}, [token, setToken, email]);
    
useEffect(() => {
    fetchUserDetails();
}, [token, fetchUserDetails]);

const handleProfileImageUpdate = async (uploadedImageUrl) => {
    // Update the state with the new URL
    setProfileImage(uploadedImageUrl);


    await fetch('http://localhost:8080/users/profile-picture', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            email: email,
            imageUrl: uploadedImageUrl
        })
    });
}
    
    
    return (
        <div className={styles.userComponent}>
        <p>Hello {firstName}</p>
        <img src={profileImage} alt="profileImage" />
        <ProfileImageUploader onImageUpload={handleProfileImageUpdate} />
        </div>
)}


export default UserComponent; 