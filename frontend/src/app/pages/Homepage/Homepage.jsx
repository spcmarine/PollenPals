import React from 'react'
import styles from './Homepage.module.css'
import SignedOutNavbar from '../../components/SignedOutNavbar/SignedOutNavbar'

const Homepage = () => {

  return (
    <div className={styles.pageWithNav}>
      <SignedOutNavbar className={styles.signedOutNavbar}></SignedOutNavbar>
      <div className={styles.fullPage}>
        <div className={styles.leftMargin}/>
        <div className={styles.infoArea}>
          <h2 className={styles.homepageHeader}>Discover FREE Plants Near You!!</h2>
        </div>
        <img className={styles.homepagePicture} src="/HomepagePic.png"></img>
        <div className={styles.rightMargin}/>
      </div>
    </div>
  )
}

export default Homepage;