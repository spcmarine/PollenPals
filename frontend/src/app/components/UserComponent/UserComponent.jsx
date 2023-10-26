import React, {useState, useCallback, useEffect} from 'react';
import styles from './UserComponent.module.css';
import ProfileImageUploader from '../ProfileImageUploader/ProfileImageUploader';

const UserComponent = ({navigate, token, setToken}) => {
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
            window.sessionStorage.setItem('profileImage', data.imageUrl);
            setProfileImage(data.imageUrl);
            
        }


    } catch (error) {         
    
        console.error("Error fetching image:", error);
    
}}, [token, setToken, email]);
    
useEffect(() => {
    fetchUserDetails();
}, [token, fetchUserDetails]);

const handleProfileImageUpdate = async (uploadedImageUrl) => {
    // Update the state with the new URL
    setProfileImage(uploadedImageUrl);
    window.sessionStorage.setItem('profileImage', uploadedImageUrl);
    window.location.reload()


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
        <img src={profileImage} alt="profileImage" className={styles.profilePreview}/>
        <ProfileImageUploader onImageUpload={handleProfileImageUpdate} className={styles.photoText}/>
        </div>
)}


export default UserComponent; 