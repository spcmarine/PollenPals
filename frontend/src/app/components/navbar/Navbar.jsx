import React, { useEffect } from "react";
import ReactDom from "react-router-dom";
import styles from './Navbar.module.css'


const Navbar = ({navigate}) =>{

  const logout = () => {
    window.localStorage.removeItem("token")
    window.sessionStorage.clear()
  }

  //onst profileImageUrl = window.sessionStorage.getItem('profileImage') || 'DefaultUser.jpg';
  useEffect(() => {console.log(window.sessionStorage.getItem('profileImage'))}, [])
  return(
    <div className={styles.navbar}>
      <a className={styles.logoArea} href="/listings"><img className={styles.logo} src="Logo.png"></img></a>
      <div className={styles.links}>
      <a className={styles.avatarArea} href="/profile">
      <img className={styles.avatar} src={window.sessionStorage.getItem('profileImage')} alt="User Avatar"/>
      </a>
        <a className={styles.link} href="/profile">{window.sessionStorage.getItem("username")}</a>
        <a className={styles.link} href="/" onClick={logout}>Logout</a>
      </div>
    </div>
  )
}

export default Navbar;