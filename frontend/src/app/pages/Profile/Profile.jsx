import React from 'react'
import styles from './Profile.module.css'
import UserComponent from '../../components/UserComponent/UserComponent'

const Profile = () => {
    return (
        <div className={styles.profile}>
        <p>Welcome To Your Profile Page</p>
        <UserComponent />
        </div>
)
}

export default Profile;