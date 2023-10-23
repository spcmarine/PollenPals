import React from "react";
import ReactDom from "react-router-dom";
import styles from './Navbar.module.css'


const Navbar = ({navigate}) =>{

  const logout = () => {
    window.localStorage.removeItem("token")
  }

  return(
    <div className={styles.navbar}>
      <a className={styles.logoArea} href="/listings"><img className={styles.logo} src="Logo.png"></img></a>
      <div className={styles.links}>
        <a className={styles.avatarArea} href="/listings"><img className={styles.avatar} src="DefaultUser.jpg"></img></a>
        <a className={styles.link} href="/listings">{window.sessionStorage.getItem("username")}</a>
        <a className={styles.link} href="/" onClick={logout}>Logout</a>
      </div>
    </div>
  )
}

export default Navbar;