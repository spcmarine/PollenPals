import React from 'react'
import styles from './Homepage.module.css'
import SignedOutNavbar from '../../components/SignedOutNavbar/SignedOutNavbar'

const Homepage = ( {navigate} ) => {

  return (
    <div className={styles.pageWithNav}>
      <SignedOutNavbar className={styles.signedOutNavbar}></SignedOutNavbar>
      <div className={styles.fullPage}>
        <div className={styles.leftMargin}/>
        <div className={styles.infoArea}>
          <h2 className={styles.homepageHeader}>Discover FREE Plants Near You!</h2>
          <p className={styles.homepageDescription}>
            Join with like minded green fingered gardening enthusiasts and swap or donate your plants. 
            Together we can nurture a greener planet and keep our bees buzzing!! 
          </p>
          <div className={styles.buttonsArea}>
            <a href="/login"><input className={styles.loginButton} type="submit" value="Log in" /></a>
            <a href="/signup"><input className={styles.signupButton} type="submit" value="Sign up" /></a>
          </div>
        </div>
        <img className={styles.homepagePicture} src="/HomepagePic.png"></img>
        <div className={styles.rightMargin}/>
      </div>
    </div>
  )
}

export default Homepage;