import React from 'react'
import styles from './Profile.module.css'
import UserComponent from '../../components/UserComponent/UserComponent'

const Profile = () => {
    return (
        <div className={styles.profile}>
        <p>Profile</p>
        <UserComponent />
        </div>
)
}

export default Profile;