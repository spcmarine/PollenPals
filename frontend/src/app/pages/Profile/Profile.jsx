import React from 'react'
import styles from './Profile.module.css'
import UserComponent from '../../components/UserComponent/UserComponent'
import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {
    return (
        <div className={styles.profile}>
         <Navbar/>
        <p>Welcome To Your Profile Page</p>
        <UserComponent />
        </div>
)
}

export default Profile;