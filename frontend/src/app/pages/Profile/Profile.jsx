import React from 'react'
import styles from './Profile.module.css'
import UserComponent from '../../components/UserComponent/UserComponent'
import Navbar from '../../components/Navbar/Navbar'


const Profile = () => {
    return (
        <div className={styles.profile}>
            <Navbar/>
            <div className={styles.pageArea}>
                <div className={styles.marginLeft} />
                    <div className={styles.profileContent}>
    
                    <h1 className={styles.welcome}>Welcome To Your Profile Page</h1>
                        <div className={styles.userInfo}>    
    
                            <div className={styles.details}>
                                
                                <h3>Here you can view and edit your details</h3>
                                <p>First Name: {window.sessionStorage.getItem('currentFirstName')}</p>
                                <p>Last Name: {window.sessionStorage.getItem('currentLastName')}</p>
                                <p>Email Address: {window.sessionStorage.getItem('userEmail')}</p>
                                
                            </div>
                            <UserComponent />
                        </div> 
                    </div>  
                <div className={styles.marginRight} />
            </div>
        </div>
)
}

export default Profile;