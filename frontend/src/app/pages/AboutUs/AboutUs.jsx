    import React, {useState} from "react";
    import styles from './AboutUs.module.css';
    import SignedOutNavbar from '../../components/SignedOutNavbar/SignedOutNavbar.jsx'

    const AboutUs = ({ navigate }) => {

        return(
            <div className={styles.aboutUs}>
                <div className={styles.pageWithNav}>
                <SignedOutNavbar className={styles.navbar} navigate={navigate}/>
                <div className={styles.aboutUsContent}>
                    <h1 className={styles.aboutUsTitle}>About Us</h1>
                    <div className={`${styles.aboutUsText}`}>
                        <p>PollenPals is a platform for plant lovers to connect with other plant lovers and swap plants. 
                            We are a community of people who love plants and want to share our love of plants with others. 
                            We believe that plants are a great way to connect with others and we want to help you find the perfect plant for you. 
                            We hope you enjoy using our platform as much as we enjoyed creating it!
                        </p>
                    </div>
                    <img className={styles.aboutPicture} src="/AboutUsOrange.png"></img>
                </div>
                </div>
            </div>  
        )
    }

    export default AboutUs;